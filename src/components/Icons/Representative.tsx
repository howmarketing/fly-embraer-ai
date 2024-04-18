import { Icon } from "types/Icon"

export const Representative = ({ width = 32, height = 29, fill = "#005AAF" }: Icon) => {
	return (
		<svg width={width} height={height} viewBox="0 0 30 30" fill={fill} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M8.7275 11.9551C8.93625 11.3751 9.255 11.187 9.675 11.1989L9.39812 11.0151C9.24812 9.13699 9.68812 5.87887 7.64875 5.26199C11.5075 0.493241 15.955 -2.09988 19.2944 2.14199C23.3175 2.35324 24.9312 8.74637 21.7225 11.4376L21.7038 11.5964C21.8294 11.5582 21.955 11.5339 22.0756 11.5245C22.3125 11.5064 22.5394 11.5451 22.7325 11.6476C22.9444 11.7607 23.1062 11.9439 23.1894 12.2032C23.2694 12.4514 23.2725 12.7682 23.1675 13.1576L22.6656 14.5814C22.5844 14.8126 22.51 14.9751 22.3481 15.1039C22.1813 15.2357 21.9794 15.2851 21.6669 15.2682C21.615 15.2657 21.5631 15.2601 21.5125 15.2507C21.4877 15.6004 21.4101 15.9443 21.2825 16.2707C21.1094 16.7157 20.8681 17.0789 20.6306 17.4139C20.3619 17.792 20.0775 18.1345 19.7806 18.442C20.0119 19.2539 20.31 19.852 20.6675 20.307C22.4825 21.612 27.3706 21.9189 29.0725 22.8676C31.5294 24.2426 31.4619 26.9001 32 29.3601H0C0.533125 26.922 0.478125 24.2207 2.9275 22.8676C5.085 21.6664 9.66313 21.7432 11.4875 20.1864C11.75 19.7751 11.9719 19.2826 12.1419 18.6951C11.7525 18.2901 11.3875 17.8089 11.055 17.2501L11.0325 17.2145C10.7325 16.7107 10.37 16.1026 10.2563 15.2582L10.1587 15.2601C9.95437 15.2576 9.7575 15.2107 9.57312 15.1064C9.27687 14.9376 9.06937 14.6501 8.92937 14.3257L8.91687 14.2932C8.75937 13.9126 8.6875 13.4789 8.67062 13.1507C8.66437 13.0282 8.66438 12.7851 8.67125 12.5526V12.5495C8.67625 12.3501 8.68687 12.157 8.70187 12.0489C8.70687 12.0157 8.715 11.9845 8.7275 11.9551V11.9551ZM20.1606 20.9351L20.1213 20.8882C19.7319 20.4201 19.4037 19.8289 19.1437 19.0582C18.7194 19.4051 18.2387 19.6995 17.7219 19.9182L17.695 19.9301H17.6944C17.0244 20.2226 16.3325 20.3639 15.6469 20.3482C15.275 20.3401 14.9056 20.2857 14.5425 20.1851L14.5288 20.1814C13.9344 20.0232 13.3438 19.7382 12.7788 19.3026C12.5463 19.9726 12.2444 20.5276 11.8912 20.9857L14.0112 26.1632L15.2569 23.2907L14.6488 22.6264C14.1919 21.9582 14.4575 21.1826 15.1956 21.0632C15.5181 21.0114 16.8231 21.0039 17.1219 21.0839C17.7906 21.2626 17.99 22.0195 17.5981 22.6264L16.99 23.2907L18.225 26.1632L20.1606 20.9351V20.9351ZM12.8244 18.2982L12.8494 18.3195C13.8087 19.237 14.8719 19.582 15.8813 19.5426C17.0988 19.4945 18.2494 18.8945 19.0594 18.0645C19.085 18.0382 19.1144 18.0145 19.1475 17.9964C19.4475 17.6957 19.7356 17.3532 20.0075 16.9707C20.2162 16.6764 20.4275 16.3595 20.5694 15.9951C20.7075 15.6401 20.7863 15.2245 20.7431 14.7132C20.7381 14.6307 20.7575 14.5457 20.8062 14.472C20.8619 14.3874 20.9488 14.3284 21.048 14.3079C21.1471 14.2874 21.2504 14.3071 21.335 14.3626C21.4019 14.4064 21.47 14.4426 21.5381 14.4676C21.5969 14.4889 21.6538 14.502 21.7056 14.5045C21.815 14.5101 21.8644 14.5101 21.8713 14.5045C21.8831 14.4957 21.9075 14.4301 21.9438 14.327L22.4306 12.9482C22.4925 12.7157 22.4969 12.5482 22.4613 12.437C22.4431 12.3807 22.4112 12.3426 22.3725 12.322C22.315 12.2914 22.2306 12.2807 22.1325 12.2882C21.9187 12.3045 21.6687 12.4082 21.4469 12.5764C21.3656 12.6376 21.26 12.667 21.1519 12.6482C20.9437 12.6126 20.8031 12.4145 20.8388 12.2064C21.1994 10.102 21.0344 8.73074 20.5863 7.79574C20.1938 6.97637 19.5675 6.48012 18.8881 6.10949C17.3806 7.26387 16.3194 7.39574 15.2606 7.52637C14.385 7.63449 13.5113 7.74262 12.3538 8.54324C11.8069 8.92137 11.4425 9.37887 11.2544 9.91012C11.0613 10.4557 11.0463 11.0907 11.2025 11.8101C11.2225 11.8826 11.2206 11.962 11.1925 12.0382C11.1213 12.2364 10.9013 12.3389 10.7031 12.2676L10.3525 12.1407C9.9 11.9826 9.57937 11.9089 9.45562 12.1932C9.44562 12.2851 9.43875 12.4257 9.435 12.5707V12.5739C9.42938 12.7832 9.42937 13.002 9.43437 13.112C9.4475 13.3714 9.50187 13.7089 9.62 13.9951L9.63375 14.0232C9.71312 14.2089 9.81875 14.3664 9.95 14.4407C10.0162 14.4782 10.09 14.4957 10.1675 14.4964C10.2625 14.4976 10.3681 14.4776 10.4806 14.4445C10.5163 14.432 10.5544 14.4251 10.5944 14.4245C10.6445 14.4233 10.6944 14.4319 10.7412 14.45C10.788 14.468 10.8308 14.4951 10.8672 14.5297C10.9035 14.5643 10.9327 14.6057 10.953 14.6516C10.9733 14.6974 10.9844 14.7468 10.9856 14.797C11.0063 15.6782 11.3844 16.312 11.6888 16.8226L11.71 16.8582C12.05 17.4295 12.425 17.9089 12.8244 18.2982V18.2982Z"
				fill="#005AAF"
			/>
		</svg>
	)
}
