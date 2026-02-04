import React, { useRef, useState } from "react";
import styles from "./input.module.css";

type Blog = {
  tl: string;
  cm: string;
};

const Input = () => {
  const [tl, settl] = useState<string>("");
  const [cm, setcm] = useState<string>("");
  const [arr, setarr] = useState<Blog[]>([]);
 const targetref=useRef(null);
  const handle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (tl.trim() && cm.trim()) {
      setarr([...arr, { tl, cm }]);

      targetref.current.focus()
      settl("");
      setcm("");
    }
  };

  const remove = (id: number) => {
    setarr(arr.filter((_, index) => index !== id));
  };

  return (
    <>
      <div className={styles.div}>
        <h1>Write a Blog</h1>

        <form className={styles.form} onSubmit={handle}>
          <label>Title</label>
          <input
            type="text"
            placeholder="Title"
            value={tl}
            onChange={(e) => settl(e.target.value)}
            className={styles.input}
            ref={targetref}
            

          />

          <label>Comment</label>
          <textarea
            placeholder="Write here..."
            value={cm}
            onChange={(e) => setcm(e.target.value)}
            className={styles.textarea}
          />

          <button type="submit" className={styles.button}>
            Add
          </button>
        </form>

        <span className={styles.span}></span>
      </div>

      <div className={styles.showblog}>
        {arr.map((val, ind) => (
          <div key={ind} className={styles.map}>
            <div className={styles.st}>
              <h4>{val.tl}</h4>
              <p>{val.cm}</p>
            </div>
            <button className={styles.removeBtn} onClick={() => remove(ind)}>
              ❌
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Input;
