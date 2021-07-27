
export interface userData {
  username: string,
  password: string,
  nameFirst: string,
  nameLast: string,
  permission: string
}

export interface tokenPayLoad extends Omit<userData, 'password'> {

}