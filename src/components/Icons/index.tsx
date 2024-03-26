export const Growth = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"
                fill="#00B69B"
            />
        </svg>
    );
};

export const Down = () => {
    return (
        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M14 12L16.29 9.71L11.41 4.83L7.41 8.83L0 1.41L1.41 0L7.41 6L11.41 2L17.71 8.29L20 6V12H14Z"
                fill="#F93C65"
            />
        </svg>
    );
};

export const Ring = () => {
    return (
        <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.98604 0C7.69165 0 5.76465 1.72617 5.51315 4.00673L4.46625 13.5H1.5C0.671573 13.5 0 14.1716 0 15V16.5C0 17.3284 0.671573 18 1.5 18H22.3201C23.1486 18 23.8201 17.3284 23.8201 16.5V15C23.8201 14.1716 23.1486 13.5 22.3201 13.5H19.3539L18.307 4.00674C18.0555 1.72618 16.1285 0 13.8341 0H9.98604Z"
                fill="#4880FF"
            />
            <rect opacity="0.3" x="8.93262" y="19.5" width="5.95502" height="6" rx="2.25" fill="#FF0000" />
        </svg>
    );
};

export const Info = () => {
    return (
        <svg
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <rect width="20" height="21.8182" fill="url(#pattern0)" />
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_94_3341" transform="matrix(0.00852273 0 0 0.0078125 -0.0454545 0)" />
                </pattern>
                <image
                    id="image0_94_3341"
                    width="128"
                    height="128"
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>
    );
};
