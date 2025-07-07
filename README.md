ТЗ: Вопросы

Vercel - https://questions-list-ior5.vercel.app/

## Описание утилитных хуков

### `src/shared/lib/use-query-params.ts`

1. React-хук для работы с параметрами в URL через `react-router-dom`.

- Читает текущие значения фильтров и номера страницы (`page`, `specialization`, `skills`, `rate`, `complexity`, `title`).

- Возвращает:
  - Строковые значения параметров (`page`, `specialization`, `skills`, `rate`, `complexity`, `title`)
  - Функции для обновления каждого параметра (`setPage`, `setSpecialization`, `setSkills`, `setRate`, `setComplexity`, `setTitle`)

### `src/shared/lib/use-pagination-range.ts`

2. React-хук для вычисления «диапазона» страниц в пагинации


- Принимает общее число элементов (`total`), размер страницы (`limit`) и настройку количества соседних страниц (`siblingCount`).
  
- Возвращает:
  - `pages` — массив номеров страниц и на месте «скрытых» участков вставляет `"..."`,  
  - `currentPage` — текущий номер страницы,  
  - `totalPages` — общее число страниц.  
