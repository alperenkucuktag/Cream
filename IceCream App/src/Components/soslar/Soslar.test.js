import Soslarr from ".";

import userEvent, { UserEvent } from "@testing-library/user-event";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

test("Api'dan gelen herbir veri için ekrana bir kart basilmasi", async () => {
  render(<Soslarr />);
  //Ekran ilk açıldığında resimler gelmeyebilir ilerleyen süreçte gelceğinden   için await yaparız
  //screen üzerinden alır fakat birden fazla elemanı bulmamız gerketiği için findAllByRole ile seçeriz
  const images = await screen.findAllByRole("img", { name: "Çeşit" });
  //beklediğimiz ise 4 resimin gelmesi bunun için toHaveLength() yaptık yani miktar/uzunluk
  expect(images).toHaveLength(4);
});

test("Çeşit Ekleme işleminin toplam fiyata yansıması", async () => {
  render(<Soslarr />);
  const user = userEvent.setup();
  const total = screen.getByTestId("deneme");
  const buttons = await screen.findAllByRole("button", { name: "Arttir" });
  const deletes = await screen.findAllByRole("button", { name: "Sıfırla" });
  //birçok buttonlar geldi 0.elemannına tıklama yaptırıyoruz yani'Mint chip' olan
  await user.click(buttons[0]);
  expect(total).toHaveTextContent("20");

  //*Burda ise normal arttımada 20 20 artıyor çift tıklandığında 60'a çıkar mı bunu test ettik toplamda 60'a çıkması gerekir
  await user.dblClick(buttons[1]);
  expect(total).toHaveTextContent("60");

  await act(async () => {
    await user.click(deletes[0]);
  });

  expect(total).toHaveTextContent("40");
});
