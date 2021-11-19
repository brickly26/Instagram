/* eslint-disable no-unused-expressions */
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { DEFAULT_IMAGE_PATH } from '../../constants/paths';

export default function User({ username, fullName }) {
  !username || !fullName ? (
    <Skeleton count={1} height={61} />
  ) : (
    <Link to={`/p/${username}`} className="grid grid-cols-4 gap-4">
      <div className="flex items-center justify-between col-span-1">
        <img
          className="rounded-full w-16 flex mr-3"
          src={`/images/avatars/${username}.jpeg`}
          alt=""
          onError={(event) => {
            event.target.src = DEFAULT_IMAGE_PATH;
          }}
        />
      </div>
      <div className="col-span-3">
        <p className="font-bold text-sm">{username}</p>
        <p className="text-sm">{fullName}</p>
      </div>
    </Link>
  );
}

User.propTypes = {
  username: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired
};
