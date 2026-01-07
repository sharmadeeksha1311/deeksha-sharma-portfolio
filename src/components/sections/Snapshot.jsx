import React, { useEffect, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';

const Page = React.forwardRef(({ children }, ref) => (
  <div className="snapshot-page" ref={ref}>
    {children}
  </div>
));

function Snapshot() {
  const bookRef = useRef(null);

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      if (bookRef.current) {
        const pageFlip = bookRef.current.pageFlip();
        pageFlip.flipNext('bottom');
      }
    }, 1200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="snapshot">
      <HTMLFlipBook
        width={320}
        height={320}
        minWidth={260}
        maxWidth={320}
        minHeight={290}
        maxHeight={390}
        showCover={true}
        flippingTime={1200}
        mobileScrollSupport={false}
        className="snapshot-book"
        ref={bookRef}
      >
        {/* Cover */}
        <Page>
          <div className="snapshot-cover">
            <span>SKILLS I KNOW</span>
          </div>
        </Page>

        {/* Inner page with your content */}
        <Page>
          <div className="snapshot-inner">
            <div className="snapshot-title">Snapshot</div>
            <div className="snapshot-list">
              <p><b>FE:</b> React, React Native, Vue, TypeScript, Redux, AEM, HTML, SCSS</p>
              <p><b>BE:</b> Node.js, Electron.js, Akka.NET</p>
              <p><b>Tools used:</b>JIRA, Git, Confluence, CI/CD </p>
            </div>
          </div>
        </Page>
      </HTMLFlipBook>
    </div>
  );
}

export default Snapshot;
