import {spring, useCurrentFrame, useVideoConfig} from 'remotion';








const Title = (props) => {






  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();
   let textNew = 'Welcome home thanks you hkhklfhklf k fkl v kldhhflhjklhf  lhjhfjkhjhlkfjdhhdfjkl imgName cannot be blank @hackSultan @edemkumodzi It’s totally stressful. Best I’ve ever done was use the main GitHub app to just checkout somethings. More? It’s worse than use of a phone. But the case changes when you conenct an external keyboard to it, then you have a laptop with a very';
  const text = textNew.split(' ').map((t) => ` ${t} `);
  return (
    <h1
      style={{
        fontFamily: 'SF Pro Text, Helvetica, Arial',
        fontWeight: 'bold',
        textAlign: 'center',
        position: 'absolute',
        width: '100%',
      }}
    >
      {text.map((t, i) => {
        return (
          <span
            key={t}
            style={{
              marginLeft: 10,
              marginRight:2,
              transform: `scale(${spring({
                fps: videoConfig.fps,
                frame: frame - i * 5,
                config: {
                  damping: 100,
                  stiffness: 200,
                  mass: 0.5,
                },
              })})`,
              display: 'inline-block',
            }}
          >
            {t}
          </span>
        );
      })}
    </h1>
  );
};

export default Title;
