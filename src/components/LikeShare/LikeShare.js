import React, { useEffect, useState } from 'react';
import { useLocation } from '@docusaurus/router';
import clsx from 'clsx';
import styles from './styles.module.css';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { getStarshareOnce } from '@site/src/utils/starshareClient';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { message } from 'antd';

function useStableIdentity() {
  const isBrowser = useIsBrowser();
  const { pathname } = useLocation();

  let docMeta;
  try {
    docMeta = useDoc()?.metadata;
  } catch {
    docMeta = undefined;
  }

  let blogMeta;
  try {
    blogMeta = useBlogPost?.()?.metadata;
  } catch {
    blogMeta = undefined;
  }

  if (docMeta) {
    const ver = docMeta.version || 'current';
    const base = docMeta.id || docMeta.unversionedId;
    const pageKey = `doc:${String(base).toLowerCase()}@${ver.toLowerCase()}`;
    const pageTitle = docMeta.title || '';
    return { pageKey, pageTitle, type: 'doc' };
  }

  if (blogMeta) {
    const base = blogMeta.id || blogMeta.permalink;
    const pageKey = `blog:${String(base).toLowerCase()}`;
    const pageTitle = blogMeta.title || '';
    return { pageKey, pageTitle, type: 'blog' };
  }

  const normalized = (pathname.replace(/\/$/, '') || '/').toLowerCase();
  const pageKey = `page:${normalized}`;
  const pageTitle = isBrowser ? document.title : '';
  return { pageKey, pageTitle, type: 'page' };
}

export default function LikeShare() {
  const isBrowser = useIsBrowser();
  const { pageKey, pageTitle } = useStableIdentity();

  const [pageInfo, setPageInfo] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [copied, setCopied] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (!isBrowser) return;

    getUserLike();
    getStarshareOnce({ hold: 1000, ttlMs: 1000 })
      .then((data) => {
        if (data) setPageInfo(data);
      })
      .catch(() => {
        messageApi.error('Server failed.');
      });
  }, [isBrowser]);

  const onToggleLike = async () => {
    if (!isBrowser) return;

    const fp = await FingerprintJS.load({ monitoring: false });
    const result = await fp.get();

    const res = await fetch('https://contest.heltec.org/api/contest/star', {
      method: 'POST',
      body: JSON.stringify({
        pageKey,
        pageTitle,
        id: result.visitorId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      messageApi.error('You’ve already liked this.');
      return;
    }
    getFingerprint();
    messageApi.success('Like Success');
  };

  const onShare = async () => {
    if (!isBrowser) return;

    const url = window.location.href;
    const title = pageTitle || document.title;

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // fallback
      }
    }

    try {
      await navigator.clipboard.writeText(url);
    } catch {
      try {
        const input = document.createElement('input');
        input.value = url;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      } catch {
        messageApi.error('Copy failed');
      }
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 1500);

    const fp = await FingerprintJS.load({ monitoring: false });
    const result = await fp.get();
    const res = await fetch('https://contest.heltec.org/api/contest/share', {
      method: 'POST',
      body: JSON.stringify({
        pageKey,
        pageTitle,
        id: result.visitorId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) {
      messageApi.error('Server failed.');
      return;
    }
    getFingerprint();
  };

  async function getFingerprint() {
    const res = await fetch('https://contest.heltec.org/api/contest/starshare', {
      method: 'GET',
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) {
      messageApi.error('Server failed.');
      return;
    }

    const data = await res.json();
    setPageInfo(data);
  }

  async function getUserLike() {
    const fp = await FingerprintJS.load({ monitoring: false });
    const result = await fp.get();

    const res = await fetch(`https://contest.heltec.org/api/contest/starshare/${result.visitorId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) {
      messageApi.error('Server failed.');
      return;
    }

    const data = await res.json();
    setUserInfo(data);
  }

  if (!isBrowser) return null;

  return (
    <div className={clsx(styles.wrapper)}>
      {contextHolder}
      <button
        className={clsx(styles.btn, userInfo?.star?.find((i) => i === pageKey) && styles.btnActive)}
        onClick={onToggleLike}
      >
        <span className={styles.icon}>👍</span>
        <span>{userInfo?.star?.find((i) => i === pageKey) ? '已点赞' : '点赞'}</span>
        <span className={styles.count}>
          {pageInfo?.star?.find((i) => i.pageKey === pageKey)?.count ?? 0}
        </span>
      </button>

      <button className={styles.btn} onClick={onShare}>
        <span className={styles.icon}>🔗</span>
        <span>{copied ? '已复制链接' : '转发/分享'}</span>
        <span className={styles.count}>
          {pageInfo?.share?.find((i) => i.pageKey === pageKey)?.count ?? 0}
        </span>
      </button>
    </div>
  );
}
