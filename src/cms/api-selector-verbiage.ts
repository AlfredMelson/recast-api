import { UserToggledApiAtomOptions } from '../recoil/api-json/atom'

type SourceSelectorAlias = {
  index: number
  name: string
  value: string
}

export const SourceSelector: SourceSelectorAlias[] = [
  { index: 0, name: '', value: '' },
  { index: 1, name: 'Random Data API', value: 'randomDataApi' },
  { index: 2, name: 'Json Placeholder API', value: 'jsonPlaceholderApi' },
]

type BaseUrlDataAlias = {
  index: string
  base: string
}

export const BaseUrlData: BaseUrlDataAlias[] = [
  { index: '', base: '' },
  { index: 'randomDataApi', base: 'https://random-data-api.com/api/' },
  { index: 'jsonPlaceholderApi', base: 'https://jsonplaceholder.typicode.com/' },
]

type RandomDataAlias = {
  index: number
  name: string
  url: string
}

export const RandomData: RandomDataAlias[] = [
  { index: 0, name: '', url: '' },
  { index: 1, name: 'Address', url: 'address/random_address' },
  { index: 2, name: 'Appliance', url: 'appliance/random_appliance' },
  { index: 3, name: 'App', url: 'app/random_app' },
  { index: 4, name: 'Bank', url: 'bank/random_bank' },
  { index: 5, name: 'Beer', url: 'beer/random_beer' },
  { index: 6, name: 'Blood', url: 'blood/random_blood' },
  { index: 7, name: 'Business Credit Card', url: 'business_credit_card/random_card' },
  { index: 8, name: 'Cannabis', url: 'cannabis/random_cannabis' },
  { index: 9, name: 'Code', url: 'code/random_code' },
  { index: 10, name: 'Coffee', url: 'coffee/random_coffee' },
  { index: 11, name: 'Commerce', url: 'commerce/random_commerce' },
  { index: 12, name: 'Company', url: 'company/random_company' },
  { index: 13, name: 'Computer', url: 'computer/random_computer' },
  { index: 14, name: 'Crypto', url: 'crypto/random_crypto' },
  { index: 15, name: 'CryptoCoin', url: 'crypto_coin/random_crypto_coin' },
  { index: 16, name: 'Color', url: 'color/random_color' },
  { index: 17, name: 'Dessert', url: 'dessert/random_dessert' },
  { index: 18, name: 'Device', url: 'device/random_device' },
  { index: 19, name: 'Food', url: 'food/random_food' },
  { index: 20, name: 'Name', url: 'name/random_name' },
  { index: 21, name: 'Hipster', url: 'hipster/random_hipster_stuff' },
  { index: 22, name: 'Invoice', url: 'invoice/random_invoice' },
  { index: 23, name: 'Users', url: 'users/random_user' },
  { index: 24, name: 'Stripe', url: 'stripe/random_stripe' },
  { index: 25, name: 'Subscrpiption', url: 'subscription/random_subscription' },
  { index: 26, name: 'Vehicle', url: 'vehicle/random_vehicle' },
  { index: 27, name: 'ID Number ', url: 'id_number/random_id_number' },
  { index: 28, name: 'Internet Stuff', url: 'internet_stuff/random_internet_stuff' },
  { index: 29, name: 'Lorem Ipsum ', url: 'lorem_ipsum/random_lorem_ipsum' },
  { index: 30, name: 'Lorem Flickr ', url: 'lorem_flickr/random_lorem_flickr' },
  { index: 31, name: 'Lorem Pixel ', url: 'lorem_pixel/random_lorem_pixel' },
  { index: 32, name: 'Nation', url: 'nation/random_nation' },
  { index: 33, name: 'Number', url: 'number/random_number' },
  { index: 34, name: 'Phone Number ', url: 'phone_number/random_phone_number' },
  { index: 35, name: 'Placeholdit', url: 'placeholdit/random_placeholdit' },
  { index: 36, name: 'Restaurant', url: 'restaurant/random_restaurant' },
]

type JsonPlaceholderDataAlias = {
  index: number
  name: string
  url: string
}

export const JsonPlaceholderData: JsonPlaceholderDataAlias[] = [
  { index: 0, name: '', url: '' },
  { index: 1, name: 'Posts', url: 'posts/' },
  { index: 2, name: 'Comments', url: 'comments/' },
  { index: 3, name: 'Albums', url: 'albums/' },
  { index: 4, name: 'Photos', url: 'photos/' },
  { index: 5, name: 'Todos', url: 'todos/' },
  { index: 6, name: 'Users', url: 'users/' },
]

type VolumeSelectorAlias = {
  index: number
  name: string
  value: string
}

export const VolumeSelector: VolumeSelectorAlias[] = [
  { index: 0, name: 'one', value: '1' },
  { index: 1, name: 'two', value: '2' },
  { index: 2, name: 'five', value: '5' },
  { index: 3, name: 'ten', value: '10' },
]

type ApiTabDataAlias = {
  index: string
  num: number
  label: string
  isIcon: boolean
  value: UserToggledApiAtomOptions
}

export const ApiTabData: ApiTabDataAlias[] = [
  { index: '0', num: 0, label: 'Data response', isIcon: false, value: 'data' },
  { index: '1', num: 1, label: 'Edit response', isIcon: false, value: 'edit' },
  { index: '2', num: 2, label: 'Full response', isIcon: false, value: 'full' },
  { index: '3', num: 3, label: 'Headers', isIcon: false, value: 'headers' },
  { index: '4', num: 4, label: ' interface', isIcon: true, value: 'ts' },
  { index: '5', num: 5, label: ' * .d.ts', isIcon: true, value: 'dtype' },
]
