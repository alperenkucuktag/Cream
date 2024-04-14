/*
 *İlk olarak test edeceğim componenti import ederiz
 *Test kütüphanesinden ekrana basmak için ve diğer işlemler için gerekli metotlar alınır
 */

import Form from ".";
//*Fireevent mouse'la üzrine gelindiğinde kullanılır
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
/*
*Test bizden 2 tane değer alır

*1-Neyin test edildiği
*2-Test fonksiyonu
*/

test("koşulların onaylanmasına göre buton aktifliği", async () => {
  /*
   *Teste başlamadan önce:
   *Test edilcek component render metodu ile arka planda ekrana basılır
   */
  // test edilecek componenti ekrana basma
  render(<Form />);
  //User türetme

  const user = userEvent.setup();

  //gerekli elemanları alma
  //siparişi onayla butonu
  const orderButton = screen.getByRole("button");
  //checkbox
  const Checkbox = screen.getByRole("checkbox");

  //Sipariş onayla butonu başlangıçta disable olmasını expect ediyoruz

  expect(orderButton).toBeDisabled();

  //checkbox'ın başlangıçta tikli olmaması

  expect(Checkbox).not.toBeChecked();
  // checkbox'a tıklatma
  await user.click(Checkbox);
  //checkbox tıklı iken siparişi onayla butonunun aktif olması durumu kontrolü

  expect(orderButton).toBeEnabled();
  //checkbox'a ikinci kez tıkla

  await user.click(Checkbox);
  //siparişi onayla butonu pasif olacak
  expect(orderButton).toBeDisabled();
});

test("onayla butonu hover olunca bildirim çıkar", async () => {
  render(<Form />);
  const user = userEvent.setup();
  //Checkbox'ı çekme
  const Checkbox = screen.getByRole("checkbox");
  //siparişi onayla butonu çekme
  const orderButton = screen.getByRole("button");
  //Açılan Popup'ı çekme ve Metin olarak çekmek için ''getByText'' kullanılır
  //*Exact özelliği ise burdaki metin ile %100 uyuşsunmu eğer sadece burdaki içerikle uyuşmasını istediğimiz için false'a çektik
  const Popup = screen.getByText("Size Gerçekten Birşey", { exact: false });
  //checkbox'a tıklama
  await user.click(Checkbox);
  //Siparişi onayala butonunun üstüne gelme
  fireEvent.mouseEnter(orderButton);
  //Popup'ı ekranda görünür olması kontrolü

  expect(Popup).toBeVisible();
  //Mouse'un siparişi onayla butonundan ayrılması
  //Hover olayı için FireEvent kullanılır
  fireEvent.mouseLeave(orderButton);
  //Popup'ın görünür olmaması kontrolü
  expect(Popup).not.toBeVisible();
});
