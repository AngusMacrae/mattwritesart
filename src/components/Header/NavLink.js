import Link from "next/link";

function NavLink({ path, caption, currentPath, callback }) {
  const isActive = currentPath === path;

  return isActive ? (
    <p className="active" onClick={callback}>
      {caption}
    </p>
  ) : (
    <Link href={path}>
      <a>{caption}</a>
    </Link>
  );
}

export default NavLink;
