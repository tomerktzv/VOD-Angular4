/**
 * Created by tomerktzv on 13/06/2017.
 */

export class movie {
  _id?: string;
  date: string;
  id: number;
  name: string;
  error: string;

  public static sortByID (unsortedNews: movie[]) {
    return unsortedNews.sort((movie1, movie2) => {
      if (movie1.id < movie2.id) {
        return 1;
      }
      if (movie1.id > movie2.id) {
        return -1;
      }
      return 0;
    });
  }

  getClassName() {
    return "movie";
  }
}
