import logoV1 from '@/assets/images/logo.png'
import logoV2 from '@/assets/images/logo-2.png'
import logoV3 from '@/assets/images/logo-3.png'

export default defineNuxtPlugin((NuxtApp) => {
    const paths = {
        logos: {
            logoV1,
            logoV2,
            logoV3,
        },

        defaultPP: 'https://picsum.photos/id/237/200/300'
    }
    return {
        provide: {
            paths
        }
    }
})