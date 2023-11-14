// import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

//using dynamic genres from API
// const useGenres = () => useData<Genre>('/genres');

//using genres as static data from data folder
const useGenres = () => ({ data: genres, isLoading: null, error: null });


export default useGenres;