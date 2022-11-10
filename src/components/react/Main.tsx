// import './Main.css';

// type Props = {
//   children: string;
// };

// function Main(children: Props) {
//   return (
//     <>
//       <main id="main">{children}</main>
//     </>
//   );
// }

// export default Main;

import './Main.css';

type Props = {
  children: string;
};

function Main({ children }: Props) {
  return (
    <>
      <main id="main">{children}</main>
    </>
  );
}

export default Main;
