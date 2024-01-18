<template>
  <div>
    <div class="tw-px-4 tw-divide-y tw-bg-[#1A1943]">
      <div
        class="tw-container tw-flex tw-flex-col tw-justify-between tw-py-10 tw-mx-auto tw-space-y-8 lg:tw-flex-row lg:tw-space-y-0">
        <div class="lg:tw-w-1/3">
          <a rel="noopener noreferrer" href="#" class="tw-flex tw-justify-center tw-space-x-3 lg:tw-justify-start">
            <img src="../assets/img/logo2.png" class="tw-h-40 tw-object-cover" alt="Logo 2geants"/>
          </a>
        </div>
        <div class="tw-grid tw-grid-cols-2 tw-text-sm tw-gap-x-3 tw-gap-y-8 lg:tw-w-2/3 sm:tw-grid-cols-4">
          <div class="tw-space-y-3">
            <h3 class="tw-tracking-wide tw-uppercase tw-text-white">Notre adresse</h3>
            <ul class="tw-space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#" class="tw-text-gray-400 tw-text-light">Z.A.C des Étangs5 Avenue des Peupliers 13920 St Mitre les Remparts</a>
              </li>

              <li>
                <a rel="noopener noreferrer" href="#" class="tw-text-gray-400 tw-text-light">Tel.: 00 00 00 00 00</a>
              </li>
            </ul>
          </div>
          <div class="tw-space-y-3">
            <h3 class="tw-tracking-wide tw-uppercase tw-text-white">Lien utile</h3>
            <ul class="tw-space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#" class="tw-text-gray-400 tw-text-light">Accueil</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" class="tw-text-gray-400 tw-text-light">Nos service</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" class="tw-text-gray-400 tw-text-light">A propos de nous</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" class="tw-text-gray-400 tw-text-light">Contact</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" class="tw-text-gray-400 tw-text-light">Blog</a>
              </li>
            </ul>
          </div>
          <div class="tw-space-y-3">
            <h3 class="tw-uppercase tw-text-white">Notre contact</h3>
            <ul class="tw-space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#" class="tw-text-gray-400 tw-text-light">Public API</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" class="tw-text-gray-400 tw-text-light">Documentation</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" class="tw-text-gray-400 tw-text-light">Guides</a>
              </li>
            </ul>
          </div>
          <div class="tw-space-y-3">
            <div class="tw-uppercase tw-text-white">Réseaux sociaux</div>
            <div class="tw-flex tw-justify-start tw-space-x-3">
              <a rel="noopener noreferrer" href="#" title="Facebook" class="tw-flex tw-items-center tw-p-1">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 11.0614C0 16.5303 3.97192 21.0778 9.16667 22V14.0553H6.41667V11H9.16667V8.55525C9.16667 5.80525 10.9386 4.27808 13.4447 4.27808C14.2386 4.27808 15.0948 4.4 15.8886 4.52192V7.33333H14.4833C13.1386 7.33333 12.8333 8.00525 12.8333 8.86142V11H15.7667L15.2781 14.0553H12.8333V22C18.0281 21.0778 22 16.5312 22 11.0614C22 4.9775 17.05 0 11 0C4.95 0 0 4.9775 0 11.0614Z" fill="white"/>
                </svg>
              </a>
              <a rel="noopener noreferrer" href="#" title="Twitter" class="tw-flex tw-items-center tw-p-1">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.59273 15.5743C13.5108 15.5743 17.2957 9.83684 17.2957 4.87034C17.2957 4.709 17.2957 4.54767 17.2884 4.38634C18.0255 3.85222 18.6615 3.19106 19.1666 2.43384C18.4788 2.73775 17.7498 2.93822 17.0033 3.02875C17.7899 2.55785 18.3788 1.81749 18.6606 0.945171C17.9214 1.38376 17.112 1.69168 16.2681 1.85542C15.9169 1.48012 15.4923 1.18094 15.0207 0.976433C14.549 0.771924 14.0404 0.666435 13.5264 0.666504C12.5284 0.667232 11.5715 1.06401 10.8658 1.76971C10.1601 2.47541 9.76329 3.43233 9.76256 4.43034C9.76256 4.72367 9.79923 5.00967 9.8579 5.28834C8.3618 5.21321 6.89823 4.82427 5.5622 4.14678C4.22617 3.4693 3.04757 2.5184 2.1029 1.35584C1.62282 2.18501 1.47627 3.1658 1.693 4.09909C1.90972 5.03238 2.47347 5.84823 3.26981 6.381C2.67313 6.36034 2.08969 6.19957 1.56665 5.91167V5.963C1.56745 6.83136 1.86798 7.67283 2.41746 8.34523C2.96694 9.01763 3.73168 9.47975 4.58248 9.6535C4.26004 9.74244 3.92696 9.78685 3.59248 9.7855C3.34956 9.7855 3.1149 9.7635 2.88665 9.7195C3.12648 10.4673 3.59433 11.1213 4.22459 11.5898C4.85486 12.0583 5.61595 12.3179 6.40115 12.332C5.06882 13.3793 3.42268 13.9476 1.72798 13.9453C1.42731 13.9453 1.12665 13.9307 0.833313 13.894C2.55363 14.9918 4.55198 15.5748 6.59273 15.5743Z" fill="white"/>
                </svg>
              </a>
              <a rel="noopener noreferrer" href="#" title="Instagram" class="tw-flex tw-items-center tw-p-1">
                <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.10706 9.40916V4.2575L13.0598 6.8425L8.10706 9.40916ZM18.9833 3.36558C18.9833 3.36558 18.8046 2.1015 18.2546 1.54508C17.5579 0.815413 16.776 0.811746 16.4176 0.768663C13.8527 0.583496 10.0036 0.583496 10.0036 0.583496H9.99631C9.99631 0.583496 6.14815 0.583496 3.5824 0.768663C3.22398 0.811746 2.44298 0.814496 1.7454 1.54508C1.1954 2.1015 1.01665 3.36558 1.01665 3.36558C1.01665 3.36558 0.833313 4.84875 0.833313 6.33283V7.72341C0.833313 9.20658 1.01665 10.6907 1.01665 10.6907C1.01665 10.6907 1.1954 11.9538 1.7454 12.5102C2.44206 13.2408 3.35873 13.217 3.76665 13.294C5.23331 13.4342 9.99998 13.4773 9.99998 13.4773C9.99998 13.4773 13.8527 13.4718 16.4176 13.2867C16.776 13.2436 17.5579 13.2408 18.2546 12.5102C18.8046 11.9538 18.9833 10.6907 18.9833 10.6907C18.9833 10.6907 19.1666 9.20658 19.1666 7.72341V6.33283C19.1666 4.84875 18.9833 3.36558 18.9833 3.36558Z" fill="white"/>
                </svg>
              </a>
              <a rel="noopener noreferrer" href="#" title="Instagram" class="tw-flex tw-items-center tw-p-1">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.64323 7.22175H11.0477V8.91758C11.5381 7.94225 12.7958 7.06591 14.6851 7.06591C18.3068 7.06591 19.1666 9.00741 19.1666 12.5696V19.1668H15.5V13.3808C15.5 11.3522 15.0096 10.2082 13.7611 10.2082C12.0295 10.2082 11.3099 11.4412 11.3099 13.3799V19.1668H7.64323V7.22175ZM1.35581 19.011H5.02248V7.06591H1.35581V19.011ZM5.54773 3.171C5.54787 3.47833 5.48691 3.78263 5.36842 4.0662C5.24992 4.34977 5.07624 4.60697 4.85748 4.82283C4.41418 5.2634 3.81414 5.51001 3.18915 5.5085C2.56525 5.50808 1.9666 5.2621 1.52265 4.82375C1.30467 4.60715 1.13158 4.34967 1.01329 4.06606C0.895006 3.78245 0.833844 3.47829 0.833313 3.171C0.833313 2.55041 1.08081 1.95641 1.52356 1.51825C1.96712 1.07931 2.56603 0.833222 3.19006 0.833496C3.81523 0.833496 4.41473 1.08008 4.85748 1.51825C5.29931 1.95641 5.54773 2.55041 5.54773 3.171Z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="tw-py-6 tw-text-sm tw-text-center tw-text-white">Copyright © 2023 2GEANTS SECURITE by MEG (Mek’s Engineering Group)</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
