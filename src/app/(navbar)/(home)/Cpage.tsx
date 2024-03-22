'use client'
import React, { useEffect, useMemo, useState } from 'react'
import TabPage from './component/Tab'
import {
  CheckBoxStateType,
  LoadMarkDownType,
  MarkDownData,
  TabStateType,
} from './component/Home'
import DialogFilter from './component/Dialog/DialogFilter'
import { newFilter } from './Text'
import DrawerFilter from './component/DrawerFilter'
import ProjectTab from './component/ProjectTab'
import OverViewTab from './component/OverViewTab'
import { useSearchParams } from 'next/navigation'
import Filter from '@/public/static/filter/filter.json'
import { useParams } from 'next/navigation'

interface HomeProps {
  markdownContents: Omit<MarkDownData, 'contentHtml'>[]
  overViewData: LoadMarkDownType
}

export default function Cpage({ markdownContents, overViewData }: HomeProps) {
  const searchParams = useSearchParams()
  const sectionDetector = useParams()
  const params = searchParams.get('grouping')
  // for special case like #4 it doesn't appear on params variable
  let fullQuery = params

  const itemsPerPage = 15
  // const { search }: HomeContextType = useHome?.()!;
  const [search, setSearch] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [state, setState] = useState<TabStateType>({
    // sort have four option
    // n stand for no sort
    // a stand for sort by name A-Z
    // le stand for low effort
    // he stand for high effort
    sort: 'a',
    // index = 0 mean overview
    // index = 1 mean project
    index: -1,
    // view have two option
    // g stand for grid
    // l stand for list
    view: 'g',
    // badge = type
    filter: true,
    dialog: false,
    drawer: false,
  })

  const [checkBox, setCheckBox] = useState<CheckBoxStateType>({
    Type: [],
    Effort: [],
    Label: [],
    Category: [],
    SkillSets: [],
    ExecutionStatus: [],
  })

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch((prev) => e.target.value)
  }

  // if search !== "" then filter by item.title
  // if currentBadge !== "All" then filter with item.type
  const filteredMarkdownContent = useMemo(() => {
    setCurrentPage(0)
    return markdownContents.filter((item) => {
      const searchCondition =
        search !== ''
          ? item.title.toLowerCase().includes(search.toLowerCase())
          : true

      const typeCondition =
        checkBox['Type'].length !== 0
          ? checkBox['Type'].some((elem) => item.type === elem)
          : true

      const effortCondition =
        checkBox['Effort'].length !== 0
          ? checkBox['Effort'].some((elem) => item.effort === elem)
          : true

      const skillSetsCondition =
        checkBox['SkillSets'].length !== 0
          ? checkBox['SkillSets'].some((elem) =>
              item["skill-sets"].some((subElem) => subElem === elem)
            )
          : true

      let categoryCondition: any
      if (checkBox['Category'].length !== 0) {
        let categoryId = newFilter.category.find(
          (elem) => elem.name === item.category
        )?.id
        categoryCondition = checkBox['Category'].some(
          (elem) => elem === categoryId
        )
      } else {
        categoryCondition = true
      }

      let executionCondition: any
      if (checkBox['ExecutionStatus'].length !== 0) {
        let executionId = newFilter['execution-status'].find(
          (elem) => elem.name === item.contributions['execution-status']
        )?.id
        executionCondition = checkBox['ExecutionStatus'].some(
          (elem) => elem === executionId
        )
      } else {
        executionCondition = true
      }

      const labelCondition =
        checkBox['Label'].length !== 0
          ? checkBox['Label'].some((elem) =>
              item.labels.some((subElem) => subElem === elem)
            )
          : true

      return (
        searchCondition &&
        typeCondition &&
        effortCondition &&
        labelCondition &&
        categoryCondition &&
        skillSetsCondition &&
        executionCondition
      )
    })
  }, [markdownContents, search, checkBox])

  const pageCount = useMemo(() => {
    return Math.ceil(filteredMarkdownContent.length / itemsPerPage)
  }, [filteredMarkdownContent])

  const currentItems = useMemo(() => {
    let sortedItems = filteredMarkdownContent

    if (state.sort === 'a') {
      sortedItems.sort((a, b) => a.title.localeCompare(b.title))
    } else if (state.sort === 'le') {
      const order: { [key: string]: number } = { Small: 0, Medium: 1, Large: 2 }
      sortedItems.sort((a, b) => {
        return order[a.effort] - order[b.effort]
      })
    } else if (state.sort === 'he') {
      const order: { [key: string]: number } = { Small: 2, Medium: 1, Large: 0 }
      sortedItems.sort((a, b) => {
        return order[a.effort] - order[b.effort]
      })
    }

    return sortedItems.slice(
      currentPage * itemsPerPage,
      (currentPage + 1) * itemsPerPage
    )
  }, [currentPage, filteredMarkdownContent, state.sort])

  const handlePageClick = (page: number) => {
    setCurrentPage((prev) => page)
  }

  const handleChangeCheckBox = (
    name: keyof CheckBoxStateType,
    value: string
  ) => {
    setCheckBox((prev) => {
      let temp = { ...prev }

      let index = temp[name].findIndex((elem) => elem === value)

      if (index === -1) {
        temp[name] = [...temp[name], value]
      } else {
        temp[name] = temp[name].filter((elem) => elem !== value)
      }

      return temp
    })
  }

  const handleClearFilter = () => {
    setCheckBox({
      Type: [],
      Effort: [],
      Label: [],
      Category: [],
      SkillSets: [],
      ExecutionStatus: [],
    })
  }

  function handleGrouping(search: string) {
    Filter['url-link-groupings'].options.map((item, i) => {
      if (item.name === search) {
        setCheckBox((prev) => ({ ...prev, Category: item['category-ids'] }))
      }
    })
  }

  useEffect(() => {
    if (fullQuery && fullQuery.length > 2) {
      handleGrouping(fullQuery)
    }
    // index = 0 mean overview
    // index = 1 mean project
  }, [fullQuery])

  useEffect(() => {
    const currentHash = window.location.hash
    switch (currentHash) {
      case '#overview':
        setState((prev) => ({ ...prev, index: 0 }))
        break
      case '#project':
        setState((prev) => ({ ...prev, index: 1 }))
        break

      default:
        setState((prev) => ({ ...prev, index: 0 }))
        break
    }
  }, [sectionDetector])


  // const router = useRouter()



  return (
    <>

      {/* 
                ─█▀▀█ ░█─── ░█─── 　 ░█▀▀█ ▀▀█▀▀ ░█▄─░█ 
                ░█▄▄█ ░█─── ░█─── 　 ░█▀▀▄ ─░█── ░█░█░█ 
                ░█─░█ ░█▄▄█ ░█▄▄█ 　 ░█▄▄█ ─░█── ░█──▀█
            */}

      <TabPage state={state} setState={setState} setCheckBox={setCheckBox} />

      {state.index === 0 && <OverViewTab overViewData={overViewData} />}

      {state.index === 1 && (
        <ProjectTab
          checkBox={checkBox}
          setState={setState}
          currentItems={currentItems}
          currentPage={currentPage}
          handleChangeCheckBox={handleChangeCheckBox}
          handlePageClick={handlePageClick}
          pageCount={pageCount}
          state={state}
          handleClearFilter={handleClearFilter}
          search={search}
          handleSearchChange={handleSearchChange}
        />
      )}

      <DialogFilter
        checkBox={checkBox}
        handleChangeCheckBox={handleChangeCheckBox}
        open={state.dialog}
        handleClearFilter={handleClearFilter}
        onClose={() => setState((prev) => ({ ...prev, dialog: false }))}
      />

      <DrawerFilter
        checkBox={checkBox}
        handleChangeCheckBox={handleChangeCheckBox}
        open={state.drawer}
        onClose={() => setState((prev) => ({ ...prev, drawer: false }))}
        handleClearFilter={handleClearFilter}
      />
    </>
  )
}
