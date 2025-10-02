import { Link } from 'react-router-dom';

type Props = {
  name?: string | null;
  slug?: string | null;
  sex?: 'm' | 'f';
};

export const PersonLink: React.FC<Props> = ({ name, slug, sex }) => {
  if (!name) {
    return <td>-</td>;
  }

  return (
    <td>
      {slug ? (
        <Link
          to={`/people/${slug}`}
          className={sex === 'f' ? 'has-text-danger' : ''}
        >
          {name}
        </Link>
      ) : (
        <span className={sex === 'f' ? 'has-text-danger' : ''}>{name}</span>
      )}
    </td>
  );
};
