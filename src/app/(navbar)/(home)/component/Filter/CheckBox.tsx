'use client'
import Checkbox from '@/src/app/component/Checkbox/Checkbox'
import { newFilter } from '../../Text'
import { CheckBoxStateType } from '../Home'

export function CheckBoxType({
  checkBox,
  handleChangeCheckBox,
}: {
  checkBox: Pick<CheckBoxStateType, 'Type'>
  handleChangeCheckBox: (name: keyof CheckBoxStateType, value: string) => void
}) {
  return (
    <>
      {newFilter['type'].map((item, i) => (
        <Checkbox
          key={i}
          sizeCheckbox="min-w-[20px] min-h-[20px]"
          label={item}
          value={item}
          className="cursor-pointer"
          checked={checkBox['Type'].includes(item)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeCheckBox(
              'Type' as keyof CheckBoxStateType,
              e.target.value
            )
          }
        />
      ))}
    </>
  )
}

export function CheckBoxEffort({
  checkBox,
  handleChangeCheckBox,
}: {
  checkBox: Pick<CheckBoxStateType, 'Effort'>
  handleChangeCheckBox: (name: keyof CheckBoxStateType, value: string) => void
}) {
  return (
    <>
      {newFilter['effort'].map((item, i) => (
        <Checkbox
          key={i}
          label={item}
          value={item}
          className="cursor-pointer"
          checked={checkBox['Effort'].includes(item)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeCheckBox(
              'Effort' as keyof CheckBoxStateType,
              e.target.value
            )
          }
        />
      ))}
    </>
  )
}

export function CheckBoxExecutionStatus({
  checkBox,
  handleChangeCheckBox,
}: {
  checkBox: Pick<CheckBoxStateType, 'ExecutionStatus'>
  handleChangeCheckBox: (name: keyof CheckBoxStateType, value: string) => void
}) {
  return (
    <>
      {newFilter['execution-status'].map((item, i) => (
        <Checkbox
          key={i}
          label={item.name}
          value={item.id}
          className="cursor-pointer"
          checked={checkBox['ExecutionStatus'].includes(item.id)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeCheckBox(
              'ExecutionStatus' as keyof CheckBoxStateType,
              e.target.value
            )
          }
        />
      ))}
    </>
  )
}

export function CheckBoxSkillsets({
  checkBox,
  handleChangeCheckBox,
}: {
  checkBox: Pick<CheckBoxStateType, 'SkillSets'>
  handleChangeCheckBox: (name: keyof CheckBoxStateType, value: string) => void
}) {
  return (
    <>
      {newFilter['skillsets'].options.map((item, i) => (
        <Checkbox
          key={i}
          label={item}
          value={item}
          className="cursor-pointer"
          checked={checkBox['SkillSets'].includes(item)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeCheckBox(
              'SkillSets' as keyof CheckBoxStateType,
              e.target.value
            )
          }
        />
      ))}
    </>
  )
}

export function CheckBoxCategory({
  checkBox,
  handleChangeCheckBox,
}: {
  checkBox: Pick<CheckBoxStateType, 'Category'>
  handleChangeCheckBox: (name: keyof CheckBoxStateType, value: string) => void
}) {
  return (
    <>
      {newFilter['category'].map((item, i) => (
        <Checkbox
          key={i}
          label={item.name}
          value={item.id}
          className="cursor-pointer"
          checked={checkBox['Category'].includes(item.id)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeCheckBox(
              'Category' as keyof CheckBoxStateType,
              e.target.value
            )
          }
        />
      ))}
    </>
  )
}
