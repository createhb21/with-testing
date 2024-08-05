import { f } from '@/styles';

const SVG = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.70712 5.29291C6.3166 4.90238 5.68343 4.90238 5.29291 5.29291C4.90238 5.68343 4.90238 6.3166 5.29291 6.70712L10.5858 12L5.29291 17.2929C4.90238 17.6834 4.90238 18.3166 5.29291 18.7071C5.68343 19.0976 6.3166 19.0976 6.70712 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70712C19.0976 6.3166 19.0976 5.68343 18.7071 5.29291C18.3166 4.90238 17.6834 4.90238 17.2929 5.29291L12 10.5858L6.70712 5.29291Z" fill="black"/>
</svg>
`;

const IconClose: React.FC<{ className?: string; onClick?: VoidFunction; }> = ({ className, onClick }) => (
  <div css={f.flex} className={className} onClick={onClick} dangerouslySetInnerHTML={{ __html: SVG }} />
);

export default IconClose;
