import CustomerIcon from '~/images/customer.png';
import OrdersIcon from '~/images/orders.png';
import PackageIcon from '~/images/package.png';
import ProfileIcon from '~/images/profile.png';
import StaffIcon from '~/images/staff.png';
import TrainerIcon from '~/images/trainer.png';

interface IIconsProps {
    height?: string;
    className?: string;
}

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

export const Empty: React.FC<IIconsProps> = () => (
    <svg width="184" height="152" viewBox="0 0 184 152" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
            <g transform="translate(24 31.67)">
                <ellipse fillOpacity=".8" fill="#F5F5F7" cx="67.797" cy="106.89" rx="67.797" ry="12.668"></ellipse>
                <path
                    d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
                    fill="#AEB8C2"
                ></path>
                <path
                    d="M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z"
                    fill="url(#linearGradient-1)"
                    transform="translate(13.56)"
                ></path>
                <path
                    d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
                    fill="#F5F5F7"
                ></path>
                <path
                    d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
                    fill="#DCE0E6"
                ></path>
            </g>
            <path
                d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
                fill="#DCE0E6"
            ></path>
            <g transform="translate(149.65 15.383)" fill="#FFF">
                <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815"></ellipse>
                <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"></path>
            </g>
        </g>
    </svg>
);

export const TrainingPrograms = () => {
    return (
        <svg
            width="65"
            height="60"
            viewBox="0 0 65 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <rect width="65" height="60" fill="url(#pattern0)" />
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_149_1121" transform="matrix(0.005 0 0 0.00541667 0 -0.0416667)" />
                </pattern>
                <image
                    id="image0_149_1121"
                    width="200"
                    height="200"
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>
    );
};

export const Dashboard = () => {
    return (
        <svg width="23" height="22" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3.15625 2.94922C4.78906 1.31641 6.73698 0.5 9 0.5C11.263 0.5 13.1966 1.31641 14.8008 2.94922C16.4336 4.55339 17.25 6.48698 17.25 8.75C17.25 11.013 16.4336 12.9609 14.8008 14.5938C13.1966 16.1979 11.263 17 9 17C6.73698 17 4.78906 16.1979 3.15625 14.5938C1.55208 12.9609 0.75 11.013 0.75 8.75C0.75 6.48698 1.55208 4.55339 3.15625 2.94922ZM13.8555 3.89453C12.5091 2.54818 10.8906 1.875 9 1.875C7.10938 1.875 5.49089 2.54818 4.14453 3.89453C2.79818 5.24089 2.125 6.85938 2.125 8.75C2.125 10.6406 2.79818 12.2591 4.14453 13.6055C5.49089 14.9518 7.10938 15.625 9 15.625C10.8906 15.625 12.5091 14.9518 13.8555 13.6055C15.2018 12.2591 15.875 10.6406 15.875 8.75C15.875 6.85938 15.2018 5.24089 13.8555 3.89453ZM8.48438 2.77734C8.6276 2.63411 8.79948 2.5625 9 2.5625C9.20052 2.5625 9.35807 2.63411 9.47266 2.77734C9.61589 2.89193 9.6875 3.04948 9.6875 3.25C9.6875 3.45052 9.61589 3.6224 9.47266 3.76562C9.35807 3.88021 9.20052 3.9375 9 3.9375C8.79948 3.9375 8.6276 3.88021 8.48438 3.76562C8.36979 3.6224 8.3125 3.45052 8.3125 3.25C8.3125 3.04948 8.36979 2.89193 8.48438 2.77734ZM4.61719 4.41016C4.76042 4.26693 4.91797 4.19531 5.08984 4.19531C5.29036 4.19531 5.46224 4.26693 5.60547 4.41016C5.7487 4.52474 5.82031 4.68229 5.82031 4.88281C5.82031 5.05469 5.7487 5.21224 5.60547 5.35547C5.46224 5.4987 5.29036 5.57031 5.08984 5.57031C4.91797 5.57031 4.76042 5.4987 4.61719 5.35547C4.5026 5.21224 4.44531 5.05469 4.44531 4.88281C4.44531 4.68229 4.5026 4.52474 4.61719 4.41016ZM12.3945 4.36719L13.3828 5.35547L10.332 8.40625C10.3607 8.52083 10.375 8.63542 10.375 8.75C10.375 9.1224 10.2318 9.45182 9.94531 9.73828C9.6875 9.99609 9.3724 10.125 9 10.125C8.6276 10.125 8.29818 9.99609 8.01172 9.73828C7.75391 9.45182 7.625 9.1224 7.625 8.75C7.625 8.3776 7.75391 8.0625 8.01172 7.80469C8.29818 7.51823 8.6276 7.375 9 7.375C9.11458 7.375 9.22917 7.38932 9.34375 7.41797L12.3945 4.36719ZM2.98438 8.27734C3.1276 8.13411 3.29948 8.0625 3.5 8.0625C3.70052 8.0625 3.85807 8.13411 3.97266 8.27734C4.11589 8.39193 4.1875 8.54948 4.1875 8.75C4.1875 8.95052 4.11589 9.1224 3.97266 9.26562C3.85807 9.38021 3.70052 9.4375 3.5 9.4375C3.29948 9.4375 3.1276 9.38021 2.98438 9.26562C2.86979 9.1224 2.8125 8.95052 2.8125 8.75C2.8125 8.54948 2.86979 8.39193 2.98438 8.27734ZM13.9844 8.27734C14.1276 8.13411 14.2995 8.0625 14.5 8.0625C14.7005 8.0625 14.8581 8.13411 14.9727 8.27734C15.1159 8.39193 15.1875 8.54948 15.1875 8.75C15.1875 8.95052 15.1159 9.1224 14.9727 9.26562C14.8581 9.38021 14.7005 9.4375 14.5 9.4375C14.2995 9.4375 14.1276 9.38021 13.9844 9.26562C13.8698 9.1224 13.8125 8.95052 13.8125 8.75C13.8125 8.54948 13.8698 8.39193 13.9844 8.27734ZM4.61719 12.1445C4.76042 12.0013 4.91797 11.9297 5.08984 11.9297C5.29036 11.9297 5.46224 12.0013 5.60547 12.1445C5.7487 12.2878 5.82031 12.4596 5.82031 12.6602C5.82031 12.832 5.7487 12.9896 5.60547 13.1328C5.46224 13.2474 5.29036 13.3047 5.08984 13.3047C4.91797 13.3047 4.76042 13.2474 4.61719 13.1328C4.5026 12.9896 4.44531 12.832 4.44531 12.6602C4.44531 12.4596 4.5026 12.2878 4.61719 12.1445ZM12.3945 12.1445C12.5378 12.0013 12.6953 11.9297 12.8672 11.9297C13.0677 11.9297 13.2253 12.0013 13.3398 12.1445C13.4831 12.2878 13.5547 12.4596 13.5547 12.6602C13.5547 12.832 13.4831 12.9896 13.3398 13.1328C13.2253 13.2474 13.0677 13.3047 12.8672 13.3047C12.6953 13.3047 12.5378 13.2474 12.3945 13.1328C12.2513 12.9896 12.1797 12.832 12.1797 12.6602C12.1797 12.4596 12.2513 12.2878 12.3945 12.1445Z"
                fill="#202224"
            />
        </svg>
    );
};

export const TrainingProgram = () => {
    return (
        <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <rect width="22" height="20" fill="url(#pattern0)" />
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_68_760" transform="matrix(0.0078125 0 0 0.00859375 0 -0.05)" />
                </pattern>
                <image
                    id="image0_68_760"
                    width="128"
                    height="128"
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>
    );
};

export const Customer = () => {
    return <img src={CustomerIcon} alt="" />;
};

export const Trainer = () => {
    return <img src={TrainerIcon} alt="" />;
};

export const Package = () => {
    return <img src={PackageIcon} alt="" />;
};

export const Staff = () => {
    return <img src={StaffIcon} width="25" height="23" alt="" />;
};

export const Profile = () => {
    return <img src={ProfileIcon} width="25" height="23" alt="" />;
};

export const Settings = () => {
    return (
        <svg width="19" height="18" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7.06641 0.8125H7.625H10.375H10.9336L11.0625 1.37109L11.4492 3.39062C12.0794 3.64844 12.6667 4.00651 13.2109 4.46484L15.2305 3.77734L15.7891 3.60547L16.0469 4.07812L17.4219 6.48438L17.6797 6.95703L17.293 7.34375L15.7461 8.67578C15.832 9.19141 15.875 9.54948 15.875 9.75C15.875 9.95052 15.832 10.3086 15.7461 10.8242L17.293 12.1562L17.6797 12.543L17.4219 13.0156L16.0469 15.4219L15.7891 15.8945L15.2305 15.7227L13.2109 15.0352C12.6667 15.4935 12.0794 15.8516 11.4492 16.1094L11.0625 18.1289L10.9336 18.6875H10.375H7.625H7.06641L6.9375 18.1289L6.55078 16.1094C5.92057 15.8516 5.33333 15.4935 4.78906 15.0352L2.76953 15.7227L2.21094 15.8945L1.95312 15.4219L0.578125 13.0156L0.320312 12.543L0.707031 12.1562L2.25391 10.8242C2.16797 10.3086 2.125 9.95052 2.125 9.75C2.125 9.54948 2.16797 9.19141 2.25391 8.67578L0.707031 7.34375L0.320312 6.95703L0.578125 6.48438L1.95312 4.07812L2.21094 3.60547L2.76953 3.77734L4.78906 4.46484C5.33333 4.00651 5.92057 3.64844 6.55078 3.39062L6.9375 1.37109L7.06641 0.8125ZM8.18359 2.1875L7.83984 3.99219L7.75391 4.37891L7.36719 4.50781C6.59375 4.76562 5.90625 5.16667 5.30469 5.71094L4.96094 5.96875L4.61719 5.88281L2.85547 5.28125L2.03906 6.65625L3.41406 7.85938L3.75781 8.11719L3.62891 8.54688C3.54297 8.91927 3.5 9.32031 3.5 9.75C3.5 10.1797 3.54297 10.5807 3.62891 10.9531L3.75781 11.3828L3.41406 11.6406L2.03906 12.8438L2.85547 14.2188L4.61719 13.6172L4.96094 13.5312L5.30469 13.7891C5.90625 14.3333 6.59375 14.7344 7.36719 14.9922L7.75391 15.1211L7.83984 15.5078L8.18359 17.3125H9.81641L10.1602 15.5078L10.2461 15.1211L10.6328 14.9922C11.4062 14.7344 12.0938 14.3333 12.6953 13.7891L13.0391 13.5312L13.3828 13.6172L15.1445 14.2188L15.9609 12.8438L14.5859 11.6406L14.2852 11.3828L14.3711 10.9531C14.457 10.5807 14.5 10.1797 14.5 9.75C14.5 9.32031 14.457 8.91927 14.3711 8.54688L14.2422 8.11719L14.5859 7.85938L15.9609 6.65625L15.1445 5.28125L13.3828 5.88281L13.0391 5.96875L12.6953 5.71094C12.0938 5.16667 11.4062 4.76562 10.6328 4.50781L10.2461 4.37891L10.1602 3.99219L9.81641 2.1875H8.18359ZM6.55078 7.34375C7.23828 6.65625 8.05469 6.3125 9 6.3125C9.94531 6.3125 10.7474 6.65625 11.4062 7.34375C12.0938 8.0026 12.4375 8.80469 12.4375 9.75C12.4375 10.6953 12.0938 11.5117 11.4062 12.1992C10.7474 12.8581 9.94531 13.1875 9 13.1875C8.05469 13.1875 7.23828 12.8581 6.55078 12.1992C5.89193 11.5117 5.5625 10.6953 5.5625 9.75C5.5625 8.80469 5.89193 8.0026 6.55078 7.34375ZM10.4609 8.28906C10.0599 7.88802 9.57292 7.6875 9 7.6875C8.42708 7.6875 7.9401 7.88802 7.53906 8.28906C7.13802 8.6901 6.9375 9.17708 6.9375 9.75C6.9375 10.3229 7.13802 10.8099 7.53906 11.2109C7.9401 11.612 8.42708 11.8125 9 11.8125C9.57292 11.8125 10.0599 11.612 10.4609 11.2109C10.862 10.8099 11.0625 10.3229 11.0625 9.75C11.0625 9.17708 10.862 8.6901 10.4609 8.28906Z"
                fill="#202224"
            />
        </svg>
    );
};

export const Logout = () => {
    return (
        <svg width="19" height="18" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.3125 0.5H9.6875V8.75H8.3125V0.5ZM6.25 0.972656V2.47656C5.01823 2.99219 4.01562 3.82292 3.24219 4.96875C2.4974 6.11458 2.125 7.375 2.125 8.75C2.125 10.6406 2.79818 12.2591 4.14453 13.6055C5.49089 14.9518 7.10938 15.625 9 15.625C10.8906 15.625 12.5091 14.9518 13.8555 13.6055C15.2018 12.2591 15.875 10.6406 15.875 8.75C15.875 7.375 15.4883 6.11458 14.7148 4.96875C13.9701 3.82292 12.9818 2.99219 11.75 2.47656V0.972656C13.3828 1.54557 14.7005 2.54818 15.7031 3.98047C16.7344 5.38411 17.25 6.97396 17.25 8.75C17.25 11.013 16.4336 12.9609 14.8008 14.5938C13.1966 16.1979 11.263 17 9 17C6.73698 17 4.78906 16.1979 3.15625 14.5938C1.55208 12.9609 0.75 11.013 0.75 8.75C0.75 6.97396 1.2513 5.38411 2.25391 3.98047C3.28516 2.54818 4.61719 1.54557 6.25 0.972656Z"
                fill="#202224"
            />
        </svg>
    );
};

export const Orders = () => {
    return <img src={OrdersIcon} alt="" />;
};
