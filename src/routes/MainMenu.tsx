import { Outlet } from 'react-router-dom'

export const MainMenu = () => {
    return (
        <div className="relative w-[100vw] h-[100vh]">
            <svg className="absolute -top-40 -left-[500px]" xmlns="http://www.w3.org/2000/svg" width="130%" height="130%" viewBox="0 0 1704 963" fill="none">
                <path opacity="0.6" d="M793.284 962.455C1295.8 962.455 1703.17 555.083 1703.17 52.5649C1703.17 -449.954 1295.8 -857.325 793.284 -857.325C290.765 -857.325 -116.606 -449.954 -116.606 52.5649C-116.606 555.083 290.765 962.455 793.284 962.455Z" fill="url(#paint0_radial_323_2534)" fill-opacity="0.6" />
                <defs>
                    <radialGradient id="paint0_radial_323_2534" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(742.879 147.716) rotate(90) scale(839.854)">
                        <stop stop-color="#FE9F00" stop-opacity="0.61" />
                        <stop offset="1" stop-opacity="0" />
                        <stop offset="1" stop-opacity="0" />
                    </radialGradient>
                </defs>
            </svg>
            {/* <svg className="absolute bottom-0 -right-[500px]" xmlns="http://www.w3.org/2000/svg" width="120%" height="120%" viewBox="0 0 1704 963" fill="none">
                <path opacity="0.6" d="M793.284 962.455C1295.8 962.455 1703.17 555.083 1703.17 52.5649C1703.17 -449.954 1295.8 -857.325 793.284 -857.325C290.765 -857.325 -116.606 -449.954 -116.606 52.5649C-116.606 555.083 290.765 962.455 793.284 962.455Z" fill="url(#paint0_radial_323_2534)" fill-opacity="0.6" />
                <defs>
                    <radialGradient id="paint0_radial_323_2534" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(742.879 147.716) rotate(90) scale(839.854)">
                        <stop stop-color="#FE9F00" stop-opacity="0.61" />
                        <stop offset="1" stop-opacity="0" />
                        <stop offset="1" stop-opacity="0" />
                    </radialGradient>
                </defs>
            </svg> */}
            <Outlet />
        </div>
    )
}