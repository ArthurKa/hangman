import Hangman from "../components/Hangman";
import { getNewWord } from "./words";
import Link from 'next/link';
// import { cookies } from 'next/headers'

export default function Home() {
  // console.log(cookies().get('asd')?.value);

  return (
    <main className="m-auto h-screen max-w-4xl">
      <Hangman word={getNewWord()} />
      <Link href='/asd'>asd</Link>
      {/* <div>{`from server: ${cookies().get('asd')?.value}`}</div> */}
    </main>
  );
}

// export const revalidate = 0
