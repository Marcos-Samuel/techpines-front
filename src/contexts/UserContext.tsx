import { createContext, ReactNode } from 'react';
import useUserProvider from '../hooks/useUserProvider';
import { IArtist } from '../pages/home';

export interface UserContextType {
  artist: IArtist | null; 
  loading: boolean;
  fetchArtist: (id: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

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
