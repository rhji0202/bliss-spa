import { MenuCategories } from "@/types/menu";

// JSON 파일에서 데이터를 가져오는 함수
export async function getMenuData(): Promise<MenuCategories> {
  const response = await fetch("/data/menuData.json");
  const data = await response.json();
  return data.menuCategories;
}
