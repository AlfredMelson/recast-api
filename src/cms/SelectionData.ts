import { UserToggledApiAtomOptions } from '../recoil-state'

export type SourceSelectionAlias = {
  source: string
  value: string
  prefix: string
}

export const SourceSelection: SourceSelectionAlias[] = [
  { source: '', value: '1', prefix: '' },
  { source: 'Random Data', value: '2', prefix: 'https://random-data-api.com/api/' },
  { source: 'Json Placeholder', value: '3', prefix: 'https://jsonplaceholder.typicode.com/' }
]

export type NodeClientAlias = {
  client: string
  value: string
}

export const NodeClient: NodeClientAlias[] = [
  { client: 'Axios', value: '1' },
  { client: 'useSWR', value: '2' }
]

export type UrlPrefixAlias = {
  index: number
  value: string
  prefix: string
}

export const UrlPrefix: UrlPrefixAlias[] = [
  { index: 1, value: '1', prefix: '' },
  { index: 2, value: '2', prefix: 'https://random-data-api.com/api/' },
  { index: 3, value: '3', prefix: 'https://jsonplaceholder.typicode.com/' }
]

export type RandomDataAlias = {
  index: number
  category: string
  appendix: string
}

export const RandomData: RandomDataAlias[] = [
  { index: 0, category: '', appendix: '' },
  { index: 1, category: 'Address', appendix: 'address/random_address' },
  { index: 2, category: 'Appliance', appendix: 'appliance/random_appliance' },
  { index: 3, category: 'App', appendix: 'app/random_app' },
  { index: 4, category: 'Bank', appendix: 'bank/random_bank' },
  { index: 5, category: 'Beer', appendix: 'beer/random_beer' },
  { index: 6, category: 'Blood', appendix: 'blood/random_blood' },
  { index: 7, category: 'Business Credit Card', appendix: 'business_credit_card/random_card' },
  { index: 8, category: 'Cannabis', appendix: 'cannabis/random_cannabis' },
  { index: 9, category: 'Code', appendix: 'code/random_code' },
  { index: 10, category: 'Coffee', appendix: 'coffee/random_coffee' },
  { index: 11, category: 'Commerce', appendix: 'commerce/random_commerce' },
  { index: 12, category: 'Company', appendix: 'company/random_company' },
  { index: 13, category: 'Computer', appendix: 'computer/random_computer' },
  { index: 14, category: 'Crypto', appendix: 'crypto/random_crypto' },
  { index: 15, category: 'CryptoCoin', appendix: 'crypto_coin/random_crypto_coin' },
  { index: 16, category: 'Color', appendix: 'color/random_color' },
  { index: 17, category: 'Dessert', appendix: 'dessert/random_dessert' },
  { index: 18, category: 'Device', appendix: 'device/random_device' },
  { index: 19, category: 'Food', appendix: 'food/random_food' },
  { index: 20, category: 'Name', appendix: 'name/random_name' },
  { index: 21, category: 'Hipster', appendix: 'hipster/random_hipster_stuff' },
  { index: 22, category: 'Invoice', appendix: 'invoice/random_invoice' },
  { index: 23, category: 'Users', appendix: 'users/random_user' },
  { index: 24, category: 'Stripe', appendix: 'stripe/random_stripe' },
  { index: 25, category: 'Subscrpiption', appendix: 'subscription/random_subscription' },
  { index: 26, category: 'Vehicle', appendix: 'vehicle/random_vehicle' },
  { index: 27, category: 'ID Number ', appendix: 'id_number/random_id_number' },
  { index: 28, category: 'Internet Stuff', appendix: 'internet_stuff/random_internet_stuff' },
  { index: 29, category: 'Lorem Ipsum ', appendix: 'lorem_ipsum/random_lorem_ipsum' },
  { index: 30, category: 'Lorem Flickr ', appendix: 'lorem_flickr/random_lorem_flickr' },
  { index: 31, category: 'Lorem Pixel ', appendix: 'lorem_pixel/random_lorem_pixel' },
  { index: 32, category: 'Nation', appendix: 'nation/random_nation' },
  { index: 33, category: 'Number', appendix: 'number/random_number' },
  { index: 34, category: 'Phone Number ', appendix: 'phone_number/random_phone_number' },
  { index: 35, category: 'Placeholdit', appendix: 'placeholdit/random_placeholdit' },
  { index: 36, category: 'Restaurant', appendix: 'restaurant/random_restaurant' }
]

export type JsonPlaceholderDataAlias = {
  index: number
  category: string
  appendix: string
}

export const JsonPlaceholderData: JsonPlaceholderDataAlias[] = [
  { index: 0, category: '', appendix: '' },
  { index: 1, category: 'Posts', appendix: 'posts/' },
  { index: 2, category: 'Comments', appendix: 'comments/' },
  { index: 3, category: 'Albums', appendix: 'albums/' },
  { index: 4, category: 'Photos', appendix: 'photos/' },
  { index: 5, category: 'Todos', appendix: 'todos/' },
  { index: 6, category: 'Users', appendix: 'users/' }
]

export type VolumeSelectorAlias = {
  index: number
  quantity: string
  value: string
}

export const VolumeSelector: VolumeSelectorAlias[] = [
  { index: 0, quantity: 'one', value: '1' },
  { index: 1, quantity: 'two', value: '2' },
  { index: 2, quantity: 'five', value: '5' },
  { index: 3, quantity: 'ten', value: '10' }
]

export type ApiTabDataAlias = {
  index: string
  num: number
  label: string
  value: UserToggledApiAtomOptions
  icon: JSX.Element | null
}

export type ApiTabPanelAlias = {
  index: number
  panel: JSX.Element | null
}
