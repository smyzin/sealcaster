import classnames, { fill, stroke, strokeWidth } from 'classnames/tailwind'

const pathClass = (withFill?: boolean) =>
  classnames(
    fill({ 'fill-primary-background': withFill }),
    stroke('stroke-accent'),
    strokeWidth('stroke-1.5')
  )

export default function ({ mobile }: { mobile?: boolean }) {
  const id = mobile ? 'mobile' : 'desktop'

  const size = 123

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 123 123"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter={`url(#filter0_d_799_23933_${id})`}>
        <circle
          cx="61.5"
          cy="61.5"
          r="61.5"
          fill={`url(#paint0_radial_799_23933_${id})`}
        />
        <circle
          cx="61.5"
          cy="61.5"
          r="61.5"
          fill={`url(#paint1_angular_799_23933_${id})`}
          style="mix-blend-mode:difference"
        />
        <circle
          cx="61.5"
          cy="61.5"
          r="61.5"
          fill={`url(#paint2_angular_799_23933_${id})`}
          style="mix-blend-mode:screen"
        />
      </g>
      <foreignObject
        width={size}
        height={size}
        clip-path={`url(#myClip_${id})`}
      >
        <div
          style={{
            background:
              'conic-gradient(from 180deg at 50% 50%, #000000 0deg, rgba(255, 255, 255, 0.72) 17deg, #000000 88deg, rgba(255, 255, 255, 0.72) 152deg, #000000 225deg, rgba(255, 255, 255, 0.72) 289deg, #000000 360deg), conic-gradient(from 180deg at 50% 50%, #000000 0deg, #FFFFFF 30deg, #000000 96deg, #FFFFFF 168.75deg, #000000 229deg, #FFFFFF 285deg, #000000 360deg), radial-gradient(79.79% 80.25% at 10.11% 28.24%, #F86EFB 7.61%, #7342FF 35.14%, #42E8FF 63.45%, #42FF6B 100%)',
            backgroundBlendMode: 'screen, difference, normal',
            width: size,
            height: size,
            borderRadius: '100%',
            filter: 'brightness(1.15)',
          }}
        />
      </foreignObject>
      <path
        d="M25.7027 54.763L23.4889 55.6847C23.3943 56.2561 23.2078 56.7363 22.9293 57.1252C22.6428 57.513 22.2867 57.7967 21.861 57.9763C21.4284 58.1468 20.9537 58.1929 20.4368 58.1147L16.739 57.5551C16.2062 57.4745 15.763 57.2854 15.4095 56.9878C15.0559 56.6903 14.8043 56.3106 14.6545 55.8487C14.4968 55.3855 14.4613 54.8677 14.548 54.2951C14.6346 53.7226 14.8218 53.2384 15.1094 52.8427C15.3891 52.4457 15.7458 52.1581 16.1795 51.9797C16.6053 51.8001 17.0806 51.75 17.6054 51.8294L21.3033 52.389C21.8202 52.4672 22.2606 52.6477 22.6245 52.9306C22.9817 53.2042 23.2324 53.5635 23.3765 54.0083L25.9843 52.9021L25.7027 54.763ZM21.9317 55.4125C21.9883 55.0387 21.9377 54.7545 21.7801 54.5598C21.6237 54.3572 21.3745 54.23 21.0325 54.1783L17.3347 53.6187C16.9848 53.5657 16.7045 53.6169 16.494 53.7721C16.2834 53.9273 16.1516 54.1799 16.0987 54.5298C16.0469 54.8717 16.0981 55.152 16.2521 55.3705C16.4073 55.5811 16.6599 55.7129 17.0098 55.7658L20.7076 56.3254C21.0495 56.3771 21.3252 56.3294 21.5346 56.1821C21.744 56.0348 21.8763 55.7783 21.9317 55.4125Z"
        className={fill('fill-primary-background')}
      />
      <path
        d="M27.063 44.3978C26.6639 45.1964 26.1317 45.7217 25.4664 45.9736C24.8046 46.2184 24.0996 46.1538 23.3514 45.7799L17.7827 42.9973L18.5916 41.3785L24.1495 44.1557C24.4804 44.3211 24.7772 44.366 25.0397 44.2904C25.2987 44.204 25.5055 44.0061 25.66 43.6968C25.811 43.3946 25.8433 43.114 25.7569 42.8551C25.6634 42.5925 25.4511 42.3786 25.1201 42.2132L19.5623 39.436L20.3712 37.8172L25.9398 40.5998C26.6809 40.9701 27.154 41.4987 27.3592 42.1857C27.5608 42.8618 27.462 43.5992 27.063 44.3978Z"
        className={fill('fill-primary-background')}
      />
      <path
        d="M31.9218 36.6563L25.6045 30.52L29.3871 26.6258L30.5121 27.7186L27.9651 30.3407L29.3844 31.7192L31.6371 29.4L32.7102 30.4423L30.4574 32.7616L32.0324 34.2914L34.5794 31.6693L35.7044 32.7621L31.9218 36.6563Z"
        className={fill('fill-primary-background')}
      />
      <path
        d="M43.2324 27.7741C42.6868 28.0672 42.1626 28.2302 41.6598 28.2629C41.157 28.2957 40.7063 28.2046 40.3078 27.9896C39.9092 27.7746 39.5882 27.4404 39.3445 26.9869L40.9387 26.1304C41.0795 26.3926 41.291 26.5483 41.5731 26.5976C41.8585 26.636 42.1748 26.5619 42.522 26.3754C42.855 26.1965 43.0736 25.9832 43.1779 25.7354C43.2892 25.4839 43.2745 25.227 43.1336 24.9649C43.0118 24.7381 42.8363 24.5814 42.6071 24.4945C42.3778 24.4077 42.1204 24.4045 41.8349 24.4848L40.9514 24.7267C40.2088 24.9248 39.5409 24.9139 38.9479 24.6938C38.3582 24.4628 37.8996 24.0427 37.5723 23.4334C37.2068 22.7532 37.1459 22.0875 37.3895 21.4362C37.6292 20.7779 38.1423 20.2374 38.9287 19.8149C39.7223 19.3885 40.4559 19.2501 41.1296 19.3994C41.8065 19.5378 42.3239 19.94 42.6818 20.606L41.0876 21.4625C40.9544 21.2145 40.7611 21.0673 40.5079 21.0207C40.2617 20.9704 39.9757 21.0328 39.6498 21.2079C39.3451 21.3716 39.1494 21.568 39.0625 21.7973C38.9757 22.0265 39.0065 22.2793 39.155 22.5556C39.2654 22.7611 39.4317 22.9091 39.6538 22.9998C39.8793 23.0795 40.1383 23.0773 40.4309 22.9931L41.3038 22.757C42.0748 22.5436 42.7478 22.5473 43.3228 22.7679C43.894 22.9814 44.349 23.4034 44.6878 24.034C44.9314 24.4874 45.0331 24.9486 44.9929 25.4176C44.9598 25.8828 44.7927 26.3195 44.4917 26.7278C44.1977 27.1322 43.7779 27.481 43.2324 27.7741Z"
        className={fill('fill-primary-background')}
      />
      <path
        d="M53.3966 23.9518L52.0787 16.8956L49.8847 17.3053L49.5857 15.7043L55.7525 14.5525L56.0515 16.1535L53.8576 16.5633L55.1755 23.6195L53.3966 23.9518Z"
        className={fill('fill-primary-background')}
      />
      <path
        d="M63.5694 23.1482L63.776 21.5326L65.5112 21.7545L66.2149 16.2497L64.4797 16.0279L64.6863 14.4124L69.9517 15.0855L69.7452 16.7011L68.01 16.4792L67.3062 21.984L69.0414 22.2058L68.8348 23.8213L63.5694 23.1482Z"
        className={fill('fill-primary-background')}
      />
      <path
        d="M77.427 26.8916C76.8952 26.6429 76.4785 26.3282 76.1771 25.9475C75.8791 25.5595 75.7042 25.1359 75.6526 24.6767C75.6117 24.2136 75.7036 23.7417 75.9285 23.2608L77.5127 19.873C77.7375 19.3922 78.0391 19.0226 78.4173 18.7644C78.8062 18.5024 79.2434 18.365 79.7288 18.3522C80.2176 18.3322 80.7279 18.4465 81.2598 18.6952C81.7989 18.9473 82.2139 19.2657 82.5046 19.6502C82.8061 20.0309 82.9772 20.4528 83.0182 20.9159C83.0698 21.3751 82.9832 21.8451 82.7583 22.326L81.1741 25.7138C80.9493 26.1947 80.6424 26.5661 80.2535 26.8282C79.8753 27.0864 79.4417 27.2255 78.9529 27.2455C78.4748 27.2617 77.9662 27.1437 77.427 26.8916ZM78.0914 25.4709C78.7471 25.7775 79.2282 25.603 79.5349 24.9472L81.1191 21.5594C81.4257 20.9037 81.2512 20.4226 80.5954 20.1159C79.9397 19.8093 79.4586 19.9839 79.152 20.6396L77.5677 24.0274C77.2611 24.6831 77.4357 25.1643 78.0914 25.4709Z"
        className={fill('fill-primary-background')}
      />
      <path
        d="M85.0872 31.3934L91.0608 24.9221L92.6121 26.3542L89.6642 32.9094C89.8483 32.6743 90.0595 32.4041 90.2977 32.0986C90.5413 31.7872 90.7852 31.4814 91.0294 31.1814C91.2849 30.8809 91.5053 30.6302 91.6908 30.4293L94.1457 27.7698L95.3159 28.85L89.3423 35.3213L87.7909 33.8893L90.7566 27.3504C90.5998 27.5559 90.4102 27.7968 90.1879 28.0732C89.9656 28.3496 89.7376 28.6263 89.5039 28.9031C89.2762 29.1854 89.0668 29.43 88.8759 29.6368L86.2573 32.4736L85.0872 31.3934Z"
        className={fill('fill-primary-background')}
      />
      <path
        d="M97.8784 50.878C97.7163 50.3137 97.6796 49.7929 97.7684 49.3155C97.8649 48.8359 98.0692 48.4257 98.3813 48.085C98.7034 47.7497 99.1196 47.5088 99.6297 47.3622L103.224 46.3294C103.734 46.1828 104.211 46.1672 104.654 46.2825C105.107 46.4034 105.498 46.6425 105.827 47C106.163 47.3552 106.413 47.815 106.575 48.3793C106.739 48.9513 106.772 49.4732 106.673 49.9451C106.584 50.4225 106.379 50.8288 106.057 51.1641C105.745 51.5048 105.334 51.7485 104.823 51.8951L101.229 52.9279C100.719 53.0745 100.237 53.0874 99.784 52.9665C99.3408 52.8512 98.951 52.6159 98.6146 52.2607C98.2882 51.9109 98.0428 51.4501 97.8784 50.878ZM99.3858 50.4449C99.5857 51.1406 100.033 51.3885 100.729 51.1886L104.324 50.1558C105.019 49.9559 105.267 49.5081 105.067 48.8124C104.867 48.1167 104.42 47.8688 103.724 48.0687L100.129 49.1015C99.4338 49.3014 99.1859 49.7492 99.3858 50.4449Z"
        className={fill('fill-primary-background')}
      />
      <path
        d="M99.543 59.8639L108.346 60.1357L108.171 65.8033L106.482 65.7511L106.602 61.8683L104.649 61.8079L104.539 65.3772L102.85 65.3251L102.96 61.7799L99.4871 61.6726L99.543 59.8639Z"
        className={fill('fill-primary-background')}
      />
      <path
        d="M93.8914 81.3714L99.9192 85.2691L101.131 83.3949L102.499 84.2793L99.0923 89.5473L97.7247 88.663L98.9366 86.7888L92.9088 82.891L93.8914 81.3714Z"
        className={fill('fill-primary-background')}
      />
      <path
        d="M87.6504 89.2369L93.2375 96.0447L91.8387 97.1927L89.6957 94.5815L88.129 95.8673L90.272 98.4785L88.8731 99.6266L83.286 92.8188L84.6848 91.6707L87.0957 94.6083L88.6625 93.3225L86.2516 90.3849L87.6504 89.2369Z"
        className={fill('fill-primary-background')}
      />
      <path
        d="M78.0239 95.9301L81.3025 104.104L76.2638 106.125L75.6799 104.669L79.0727 103.309L78.3361 101.472L75.3353 102.676L74.7784 101.287L77.7792 100.084L76.9618 98.0459L73.5691 99.4067L72.9852 97.9511L78.0239 95.9301Z"
        className={fill('fill-primary-background')}
      />
      <path
        d="M57.7689 99.6618L56.3179 108.348L53.4977 107.877C52.8948 107.777 52.3905 107.574 51.9846 107.27C51.5709 106.964 51.2762 106.581 51.1005 106.119C50.9155 105.664 50.8701 105.155 50.9642 104.592L51.483 101.486C51.5757 100.931 51.7842 100.464 52.1083 100.086C52.4244 99.7068 52.8285 99.4359 53.3204 99.2734C53.8031 99.1176 54.3458 99.09 54.9487 99.1907L57.7689 99.6618ZM55.7157 100.97L54.6804 100.797C54.3234 100.738 54.0153 100.8 53.7561 100.985C53.4889 101.169 53.3262 101.435 53.2679 101.784L52.7491 104.89C52.6908 105.239 52.7588 105.54 52.9531 105.793C53.1381 106.052 53.4091 106.211 53.7661 106.271L54.8013 106.444L55.7157 100.97Z"
        className={fill('fill-primary-background')}
      />
      <path
        d="M46.5778 96.9613L40.6077 103.786L38.5726 102.732L40.6869 93.9078L42.3256 94.7572L41.7844 96.7188L43.6481 97.6849L44.9391 96.1119L46.5778 96.9613ZM42.7141 98.8314L41.3967 98.1485L40.7944 100.228C40.7037 100.525 40.6185 100.821 40.5387 101.115C40.448 101.412 40.3781 101.643 40.3289 101.808C40.4352 101.672 40.5818 101.486 40.7688 101.247C40.9486 101.005 41.1373 100.764 41.3351 100.522L42.7141 98.8314Z"
        className={fill('fill-primary-background')}
      />
      <path
        d="M34.8056 89.1486L32.5876 91.3666L30.3696 97.1675L29.0303 95.8282L30.1222 93.1666C30.2303 92.8993 30.3611 92.632 30.5147 92.3647C30.6625 92.0917 30.7905 91.8784 30.8985 91.7249C30.7393 91.8272 30.5289 91.958 30.2673 92.1173C30 92.2708 29.7355 92.4045 29.4739 92.5182L26.8379 93.6358L25.5071 92.305L31.308 90.087L33.526 87.869L34.8056 89.1486Z"
        className={fill('fill-primary-background')}
      />
      <path
        d="M23.2217 75.9455C23.3373 76.414 23.2872 76.8323 23.0715 77.2003C22.846 77.5624 22.499 77.8012 22.0305 77.9168C21.562 78.0324 21.1476 77.9814 20.7874 77.7637C20.4175 77.5402 20.1747 77.1941 20.0592 76.7256C19.9436 76.2571 19.9985 75.8418 20.224 75.4796C20.4397 75.1116 20.7818 74.8698 21.2504 74.7543C21.7189 74.6387 22.1381 74.6927 22.508 74.9162C22.8682 75.1339 23.1061 75.4769 23.2217 75.9455Z"
        className={fill('fill-primary-background')}
      />
      <circle
        cx="61.5"
        cy="61.4998"
        r="54.5"
        className={stroke('stroke-primary-background')}
      />
      <path
        d="M34.7191 74.0958L57.6424 36.5849C59.2021 34.0326 62.909 34.0326 64.4687 36.5849L87.392 74.0958C89.0209 76.7612 87.1026 80.1816 83.9789 80.1816H38.1322C35.0085 80.1816 33.0902 76.7612 34.7191 74.0958Z"
        className={fill('fill-primary-background')}
      />
      <path
        d="M59.3317 67.6776C59.3317 66.2391 60.3484 65.073 61.6025 65.073C62.8566 65.073 63.8733 66.2391 63.8733 67.6776C63.8733 69.1161 62.8566 68.9657 61.6025 68.9657C60.3484 68.9657 59.3317 69.1161 59.3317 67.6776Z"
        className={fill('fill-primary-background')}
      />
      <path
        d="M61.6025 68.9657C62.8566 68.9657 63.8733 69.1161 63.8733 67.6776C63.8733 66.2391 62.8566 65.073 61.6025 65.073C60.3484 65.073 59.3317 66.2391 59.3317 67.6776C59.3317 69.1161 60.3484 68.9657 61.6025 68.9657ZM61.6025 68.9657C61.6025 69.8308 61.6025 71.7555 61.6025 72.5341M61.6025 72.5341C61.6025 75.1293 64.8464 75.1292 64.8464 72.5341M61.6025 72.5341C61.6025 75.1293 58.3585 75.1293 58.3585 72.5341"
        className={pathClass()}
      />
      <path d="M71.9706 68.811L68.0779 69.4598" className={pathClass()} />
      <path d="M68.0794 71.4045L71.9722 72.0533" className={pathClass()} />
      <path d="M51.0799 68.811L54.9727 69.4598" className={pathClass()} />
      <path d="M54.9721 71.407L51.0793 72.0558" className={pathClass()} />
      <path
        d="M68.6144 56.0065C69.0507 56.5754 69.0507 57.3437 68.6144 57.9126C67.5014 59.3642 65.0228 61.9625 61.5402 61.9625C58.0577 61.9625 55.579 59.3642 54.466 57.9126C54.0298 57.3437 54.0298 56.5754 54.466 56.0065C55.579 54.5549 58.0577 51.9565 61.5402 51.9565C65.0228 51.9565 67.5014 54.5549 68.6144 56.0065Z"
        className={pathClass(true)}
      />
      <circle cx="61.54" cy="56.9596" r="2.27408" className={pathClass(true)} />

      <defs>
        <radialGradient
          id={`paint0_radial_799_23933_${id}`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12.4293 34.7369) rotate(29.6941) scale(112.977 113.755)"
        >
          <stop offset="0.08" stop-color="#F86EFB" />
          <stop offset="0.35" stop-color="#7342FF" />
          <stop offset="0.64" stop-color="#42E8FF" />
          <stop offset="1" stop-color="#42FF6B" />
        </radialGradient>
        <radialGradient
          id={`paint1_angular_799_23933_${id}`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(61.5 61.4998) rotate(90) scale(61.5)"
        >
          <stop offset="0.08" stop-color="white" />
          <stop offset="0.27" />
          <stop offset="0.47" stop-color="white" />
          <stop offset="0.64" />
          <stop offset="0.8" stop-color="white" />
          <stop offset="1" />
        </radialGradient>
        <radialGradient
          id={`paint2_angular_799_23933_${id}`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(62 62) rotate(90) scale(62)"
        >
          <stop offset="0.047" stop-color="white" stop-opacity="0.72" />
          <stop offset="0.25" />
          <stop offset="0.42" stop-color="white" stop-opacity="0.72" />
          <stop offset="0.63" />
          <stop offset="0.8" stop-color="white" stop-opacity="0.72" />
          <stop offset="1" />
        </radialGradient>
      </defs>
    </svg>
  )
}
