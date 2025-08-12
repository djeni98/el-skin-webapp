import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { setSearchTerm } from '../store/slices/searchSlice';


export const useSearch = () => {
  const dispatch = useDispatch<AppDispatch>();
  const search = useSelector((state: RootState) => state.search.searchTerm);

  return {
    search,
    setSearch: (searchTerm: string) => {
      dispatch(setSearchTerm(searchTerm));
    }
  };
};