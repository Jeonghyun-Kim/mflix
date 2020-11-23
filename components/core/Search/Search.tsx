import React from 'react';
import debounce from 'lodash.debounce';
import { Input } from '@components/ui';
import { searchMovie } from '@lib/movies';

import { Root } from './Search.styles';

interface Props {
  className?: string;
}
const Search: React.FC<Props> = ({ className, ...props }) => {
  const [term, setTerm] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);
  const [searchData, setSearchData] = React.useState<Movie[]>([]);

  React.useEffect(() => {
    const handleSearch = debounce(async () => {
      try {
        setLoading(true);
        setSearchData(await searchMovie(term));
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }, 1);
    if (term.length > 2) {
      handleSearch();
    } else {
      setSearchData([]);
    }
  }, [term]);

  return (
    <Root className={className} {...props}>
      <Input value={term} onChange={(e) => setTerm(e.target.value)} />
      {loading
        ? 'loading...'
        : searchData.map((movie) => (
            <div>
              ({movie.year}) {movie.title}
            </div>
          ))}
    </Root>
  );
};

export default Search;
