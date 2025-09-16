
const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

const Pagination = {
    array:[],
    currentPage: 0,

    init: (array=[], pageSize) => {
         Pagination.array =  array.reduce((acc , item , index) => {
             if(index % pageSize === 0)
                 acc.push([])
                 acc[acc.length - 1].push(item)

             return acc
          }, [])

         Pagination.currentPage = 0
         return Pagination.array
     },

    getPageItems: () => {
        console.log(Pagination.array[Pagination.currentPage])
        return Pagination
    },

    prevPage: () => {
        if(Pagination.currentPage > 0 && Pagination.currentPage <= Pagination.array.length - 1)
                  Pagination.currentPage -= 1
        return Pagination
    },
    nextPage: () => {
       if(Pagination.currentPage < Pagination.array.length - 1 && Pagination.currentPage >= 0)
              Pagination.currentPage += 1
        return Pagination
    },
    firstPage: () => {
        Pagination.currentPage = 0
        return Pagination
    },
    lastPage: () => {
         Pagination.currentPage = Pagination.array.length - 1
         return Pagination
    },
    goToPage: (page) => {
         if(page >= 0 && page < Pagination.array.length)
            Pagination.currentPage = page 
       return Pagination
    }

}
