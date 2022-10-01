const Filter = () => {
    return (
        <>
        <div class="clearfix curved-card bg-light">
        <div class="d-flex align-items-center">
            <div class="filter-text">
            <span class="filter-icon"><i class="fa-solid fa-arrow-down-9-1"></i></span> <span class="text-filter">Filter Results</span>
            </div>
            <div class="filter-date ms-auto">
            <div class="input-group date" id="datepicker">
                <input type="text" class="form-control" id="date"/>
                <span class="input-group-append">
                <span class="input-group-text bg-light d-block">
                    <i class="fa-regular fa-calendar"></i>
                </span>
                </span>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Filter;