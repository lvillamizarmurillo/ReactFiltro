import React, { useEffect, useState } from 'react'
import { getAll } from "../storage/producto";

export default function Section() {
  const [img, setImg] = useState(null);
  const [msg, setMsg] = useState(null);
  const [json, setJson] = useState(null);

  useEffect(()=>{
    getAll().then(res=>{
      setImg(res.link);
      setMsg(res.message);
      setJson(JSON.stringify(res.data, null, 2));
    })
  },[])

  return (
    <>
      <section>
        <article>
         <img src={img} />
         <p>{msg}</p>
         <pre>{json}</pre>
        </article>
      </section>
    </>
  )
}
