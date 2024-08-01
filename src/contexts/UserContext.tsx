import { createContext, ReactNode } from 'react';
import useUserProvider from '../hooks/useUserProvider';
import { IArtist } from '../pages/home';

export interface UserContextType {
  artist: IArtist | null; 
  loading: boolean;
  fetchArtist: (id: string) => void;
}

const defaultContextValue: UserContextType = {
  artist: null,
  loading: true,
  fetchArtist: () => {},
  
};

const UserContext = createContext<UserContextType>(defaultContextValue);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const userProvider = useUserProvider();

  return (
    <UserContext.Provider value={userProvider}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
