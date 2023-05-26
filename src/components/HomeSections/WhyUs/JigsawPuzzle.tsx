import { Trans, withTranslation } from "react-i18next";
import style from "./JigsawPuzzle.module.scss";

const data = [
  {
    title: `JIGSAW1`,
    desc: `JIGSAW_DESC1`,
  },
  { title: `JIGSAW2`, desc: `JIGSAW_DESC2` },
  {
    title: `JIGSAW3`,
    desc: `JIGSAW_DESC3`,
  },
  {
    title: `JIGSAW4`,
    desc: `JIGSAW_DESC4`,
  },
  { title: `JIGSAW5`, desc: `JIGSAW_DESC5` },
  {
    title: `JIGSAW6`,
    desc: `JIGSAW_DESC6`,
  },
  { title: `JIGSAW7`, desc: `JIGSAW_DESC7` },
  {
    title: `JIGSAW8`,
    desc: `JIGSAW_DESC8`,
  },
];

const JigsawPuzzle = () => {
  return (
    <div className={style.container}>
      {data.map((puzzle) => (
        <div key={puzzle.title} className={style.puzzle}>
          <div className={style.puzzle_header}>
            <Trans>{puzzle.title}</Trans>
          </div>
          <div className={style.puzzle_body}>
            <Trans>{puzzle.desc}</Trans>
          </div>
        </div>
      ))}
    </div>
  );
};

export default withTranslation()(JigsawPuzzle);
