import { memo, useState } from 'react'
import { OnDocumentLoadSuccess } from 'node_modules/react-pdf/dist/esm/shared/types'
import useResizeObserver from 'use-resize-observer'
import * as pdfjs from 'pdfjs-dist'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'

import { DocumentWrapper, StyledDocument, StyledPage } from './ResumeDetail.styled'

const src = new URL('pdfjs-dist/build/pdf.worker.js', import.meta.url)
pdfjs.GlobalWorkerOptions.workerSrc = src.toString()

type ResumeViewerProps = {
  fileUrl: string
}

function ResumeViewerComponent({ fileUrl }: ResumeViewerProps) {
  const { ref: containerRef, width: containerWidth = 0 } = useResizeObserver<HTMLDivElement>()
  const [numPages, setNumPages] = useState(0)

  const onDocumentLoadSuccess: OnDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }

  const subPadding = (width: number) => {
    const PADDING = 80
    return width - PADDING * 2
  }

  const getPageWidth = () => {
    const MAX_WIDTH = 800

    if (containerWidth) {
      return Math.min(subPadding(containerWidth), subPadding(MAX_WIDTH))
    }

    return subPadding(MAX_WIDTH)
  }

  return (
    <DocumentWrapper ref={containerRef}>
      <StyledDocument file={fileUrl} onLoadSuccess={onDocumentLoadSuccess} loading={'Đang tải...'}>
        {Array.from(new Array(numPages), (el, index) => (
          <StyledPage key={`page_${index + 1}`} pageNumber={index + 1} width={getPageWidth()} />
        ))}
      </StyledDocument>
    </DocumentWrapper>
  )
}

export const ResumeViewer = memo(ResumeViewerComponent)
