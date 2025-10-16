import { Image, Skeleton, ConfigProvider } from "antd";
import { useEffect, useState } from "react";
import styles from "./index.module.css"

const ImageWidget = (props) => {

    const [isLoad, setIsLoad] = useState(false)

    const onImageLoad = () => {
        setIsLoad(true)
    }

    useEffect(() => {
        console.log(props.src)
    }, [props.src]);

    return (
        <div className={`${styles.image_wrap} ${props.className}`}>
            <ConfigProvider
                theme={{
                    components: {
                        Skeleton: {
                            gradientFromColor : "rgba(255,255,255,0.06)",
                            gradientToColor : "rgba(255,255,255,0.15)"
                        },
                    },
                }}
            >
                <div className={styles.image_box}>
                    <Image
                        preview={false}
                        src={props.src ?? '/img/main-img/wireless_aggregator.png'}
                        fallback={'/img/main-img/wireless_aggregator.png'}
                        onLoad={onImageLoad}
                        onError={onImageLoad} // Ensure it triggers if error occurs
                        style={{ opacity: isLoad ? 1 : 0, transition: 'opacity 0.3s ease' }}
                        className={props.imageStyle}
                    />
                </div>
                {!isLoad && (
                    <div className={styles.skeleton_box}>
                        <Skeleton.Button className={styles.skeleton} block active />
                    </div>
                )}

            </ConfigProvider>
        </div>
    )
}

export default ImageWidget