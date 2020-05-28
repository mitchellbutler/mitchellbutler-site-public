import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledPagination = styled.ul`
  list-style: none;
  text-align: center;

  .pagination {
    &__item {
      display: inline-block;
      padding: 8px;
      margin: 4px;
      &__link {
        &.is--current {
          text-decoration: none;
          font-weight: 600;
        }
      }
    }
  }
`

interface PaginationProps {
  currentPage: number
  totalPages: number
}

const getPageHref = (index: number) => (index === 1 ? '/' : `/page/${index}/`)

const constructPageList = ({ totalPages, currentPage }: PaginationProps) =>
  new Array(totalPages).fill(null).map((_val, index) => {
    const pageNumber = index + 1
    const isCurrent = pageNumber === currentPage
    return {
      pageNumber,
      href: getPageHref(pageNumber),
      isCurrent,
    }
  })

export const Pagination: FunctionComponent<PaginationProps> = ({
  totalPages,
  currentPage,
}) => {
  const pageList = constructPageList({ totalPages, currentPage })
  const prevPageHref = currentPage > 1 && getPageHref(currentPage - 1)
  const nextPageHref = currentPage < totalPages && getPageHref(currentPage + 1)
  return (
    <StyledPagination>
      {prevPageHref && (
        <li className="pagination__item">
          <Link className="pagination__item__link" to={prevPageHref}>
            &laquo;
          </Link>
        </li>
      )}
      {pageList.map(({ href, isCurrent, pageNumber }) => (
        <li className="pagination__item" key={href}>
          <Link
            className={`pagination__item__link ${
              isCurrent ? 'is--current' : ''
            }`}
            to={href}
          >
            {pageNumber}
          </Link>
        </li>
      ))}
      {nextPageHref && (
        <li className="pagination__item">
          <Link className="pagination__item__link" to={nextPageHref}>
            &raquo;
          </Link>
        </li>
      )}
    </StyledPagination>
  )
}
