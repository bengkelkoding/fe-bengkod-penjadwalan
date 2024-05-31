// types/UserTypes.ts
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserState {
  users: User[];
  loggedInUser: User | null;
  token?: string;
}

export type UserAction =
  | { type: "CREATE_DATA"; payload: User }
  | { type: "LOGIN_USER"; payload: { user: User; token: string } };

export interface UserContextType extends UserState {
  dispatch: React.Dispatch<UserAction>;
}
