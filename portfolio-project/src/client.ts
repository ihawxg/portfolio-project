import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '@sanity/client'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = sanityClient({
    projectId: '2fittxlf',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skNXtZgQe57UUjvKbWyD1ferA3jRWtavBKseT1fOrQRGpl6C2nsQg4xurfGKQKOxl2CvaXJbYbVhe16P1CtI2bJBpC0hc7INzykIlgDFdNQgifWWy79Agb3RroCG5SCYOW8SkHkI4g5sU1eelYJxYt2x3slNMFf7ZshVklKC3eMCnFl4ffOU'
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: SanityImageSource) => builder.image(source)