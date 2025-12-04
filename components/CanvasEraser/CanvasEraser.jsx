import React from 'react';
import useForkRef from '../../hooks/useForkRef';
import canvasEraserFactory from './CanvasEraserFactory';

const CanvasEraser = (props, ref) => {
  const {
    completeRatio = 1,
    enabled = true,
    onComplete = null,
    onProgress = null,
    size = 40,
    background = '#000',
    width,
    height,
    ...other
  } = props;

  const [canvasEraser, setCanvasEraser] = React.useState(null);
  const canvasRef = React.useRef(null);
  const componentRef = useForkRef(canvasRef, ref);

  const options = React.useMemo(
    () => {
      const opts = {
      background,
      completeRatio,
      enabled,
      onComplete,
      onProgress,
      size,
      width,
      height,
      };
      console.log('🎨 CanvasEraser: Options memoized', opts);
      return opts;
    },
    [
      background,
      completeRatio,
      enabled,
      onComplete,
      onProgress,
      size,
      width,
      height,
    ],
  );

  React.useEffect(() => {
    console.log('🎨 CanvasEraser Component: Creating factory instance');
    const canvas = canvasEraserFactory();
    setCanvasEraser(canvas);
    console.log('🎨 CanvasEraser: Factory instance created');
  }, []);

  React.useEffect(() => {
    if (canvasEraser) {
      console.log('🎨 CanvasEraser: Initializing with options', options);
      canvasEraser.init(canvasRef.current, options);
    }
  }, [canvasEraser, options]);

  return <canvas ref={componentRef} {...other} />;
};

export default React.forwardRef(CanvasEraser);
