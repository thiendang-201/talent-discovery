import { VIEW_MODE } from '@/constants'
import { ToggleActive, ToggleGroupRoot, ToggleItem } from './ViewMode.styled'
import { HiViewGrid, HiViewList } from 'react-icons/hi'

export function ViewMode({ mode, onChangeMode }: ViewModeProps) {
  return (
    <ToggleGroupRoot type='single' value={mode} onValueChange={onChangeMode}>
      <ToggleActive isGrid={mode === VIEW_MODE.grid} />
      <ToggleItem value={VIEW_MODE.grid}>
        <HiViewGrid size={14} />
      </ToggleItem>
      <ToggleItem value={VIEW_MODE.list}>
        <HiViewList size={14} />
      </ToggleItem>
    </ToggleGroupRoot>
  )
}

type ViewModeProps = {
  mode: VIEW_MODE
  onChangeMode: (mode: VIEW_MODE) => void
}
