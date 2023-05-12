import React from 'react'

const Awards = () => {
  return (
    <>
<div className="text-xl md:text-7xl  mb-4 mt-32 text-white flex flex-row justify-between  items-center">
  <h1 className="md:text-left font-bold">Credential</h1>
  <h3 className="text-sm md:max-w-xl px-2 max-w-sm md:text-2xl justify-end text-right">My work has been recognized  by industry  experts. </h3>
</div>
<hr className="border-gray-300 mb-8 my-4 w-full" />

<div className="text-white mt-20 mb-16  md:text-3xl text-left">
  <ol className="max-w-lg mx-auto ">
    <li href="https://www.credential.net/ba7844de-cc3a-4835-a3d0-0079a93a4cca">01. Microverse Ruby/Databases </li>
    <hr className="my-8" />
    <li href="https://www.credential.net/e3529ca8-9fe5-4cb8-9cdd-2c6ae722c1f3">02. Microverse React & Redux </li>
    <hr className="my-8" />
    <li href="https://www.credential.net/c917cafa-b0a6-4fc5-be27-1741b442d7af">03. Microverse JavaScript </li>
    <hr className="my-8" />
    <li href="https://www.credential.net/9f401a1e-1350-4336-b0ca-8824cc60474b">04.  Microverse HTML/CSS  </li>
    <hr className="my-8" />
  </ol>
</div>



    </>
  )
}

export default Awards