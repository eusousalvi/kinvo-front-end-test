import svgPool from 'helpers/svgPool';
import { SvgWrapper } from 'components/styled/lib';

const DynamicSvg = ({ color, name }) => {
  const DynamicComponent = svgPool[name] || svgPool['ativos'];

  return (
    <SvgWrapper color={color}>
      <DynamicComponent />
    </SvgWrapper>
  );
};

export default DynamicSvg;
