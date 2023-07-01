import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: 'eixboe17',
    dataset: 'production',
    useCdn: true, 
    apiVersion: '2023-07-01', 
})