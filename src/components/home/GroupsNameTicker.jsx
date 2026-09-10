import { groupsData } from '../../data/groups.data'

function GroupsNameTicker() {
  const names = groupsData.hotels.map((hotel) => hotel.name)
  const tickerItems = [...names, ...names, ...names]

  return (
    <section
      className="overflow-hidden border-y border-[var(--color-primary)] bg-[var(--color-primary-dark)] py-4 text-[var(--color-primary)]"
      aria-label="SAN group hotel names"
    >
      <div className="flex w-max animate-[groupsTicker_34s_linear_infinite] items-center gap-6 whitespace-nowrap">
        {tickerItems.map((name, index) => (
          <span className="inline-flex items-center gap-6" key={`${name}-${index}`}>
            <span className="nav-text text-[13px] text-[var(--color-primary)] sm:text-[15px]">{name}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" aria-hidden="true" />
          </span>
        ))}
      </div>
    </section>
  )
}

export default GroupsNameTicker
