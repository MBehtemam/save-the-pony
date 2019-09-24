import HttpEnum from "../Enums/HTTPEnum";
import ICreateMaze from "../Interfaces/ICreateMaze";
import IMove from "../Interfaces/IMove";
import IBoard from "../Interfaces/IBoard";
class MazeAPI {
  async createMaze(mazeInfo: ICreateMaze) {
    const url = "https://ponychallenge.trustpilot.com/pony-challenge/maze";
    try {
      const response = await fetch(url, {
        method: HttpEnum.POST,
        body: JSON.stringify(mazeInfo)
      });
      const data = await response.json();
      return data.maze_id;
    } catch (err) {
      throw new Error(err);
    }
  }
  async getMaze(mazeId: string) {
    const url = `https://ponychallenge.trustpilot.com/pony-challenge/maze/${mazeId}`;
    try {
      const response = await fetch(url, { method: HttpEnum.GET });
      const data: IBoard = await response.json();
      return data;
    } catch (err) {
      throw new Error(err);
    }
  }
  async Move(mazeId: string, moveInfo: IMove) {
    const url = `https://ponychallenge.trustpilot.com/pony-challenge/maze/${mazeId}`;
    try {
      const response = await fetch(url, {
        method: HttpEnum.POST,
        body: JSON.stringify(moveInfo)
      });
      const data = response.json();
      return data;
    } catch (err) {
      throw new Error(err);
    }
  }
  async getMazeVisualize(mazeId: string) {
    const url = `https://ponychallenge.trustpilot.com/pony-challenge/maze/${mazeId}`;
    try {
      const response = await fetch(url, {
        method: HttpEnum.GET
      });
      const data = response.json();
      return data;
    } catch (err) {
      throw new Error(err);
    }
  }
}
export default MazeAPI;
