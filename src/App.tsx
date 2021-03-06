import React from "react";
import "./App.scss";
import FacultyList from "./components/FacultyList";
import Formular from "./components/Formular";
import Management from "./components/Management";
import SponsorList from "./components/SponsorList";
import "./Responsive.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="content1">
          <div className="logo-name">
            <div className="logo"></div>

            <h1>Universitatea „Dunărea de Jos”</h1>

            <span></span>
          </div>

          <div className="text-photo">
            <div className="unu">
              <div className="text">
                <h3>
                  În prezent, Universitatea „Dunărea de Jos” din Galați are 14
                  facultăţi şi pregăteşte studenţi pentru ciclurile de studii
                  universitare de licenţă, masterat şi doctorat în domenii
                  diverse (tehnic, umanist, economic, sănătate, artistic).
                  Universitatea „Dunărea de Jos” din Galați organizează ciclul
                  II de studii cu durata de doi ani pentru absolvenţii ciclului
                  I. În cadrul Universității „Dunărea de Jos” din Galați se
                  derulează studii doctorale în 12 domenii, sub coordonarea a 85
                  conducători de doctorat. În prezent, număr total de studenţi
                  doctoranzi în stagiu este 254.
                </h3>
              </div>
              <div className="photo"></div>
            </div>
            <div className="doi">
              <div className="text">
                <h3>
                  Universitatea "Dunărea de Jos" din Galați are printre
                  obiectivele prioritare sprijinirea membrilor comunității
                  academice în accesarea fondurilor și în implementarea de
                  proiecte care să aducă numeroase beneficii la nivel
                  instituțional: creșterea numărului de cercetători; susținerea
                  formării unor generații deschise către mediul științific
                  european și internațional; crearea unui mediu de cercetare
                  competitiv; diseminarea cunoștințelor și rezultatelor
                  cercetării; dezvoltarea, modernizarea și utilizarea eficientă
                  a infrastructurii educaționale și de cercetare; eficientizarea
                  utilizării resurselor existente în cadrul instituției;
                  implicarea în parteneriate cu instituții publice și private;
                  identificarea și utilizarea instrumentelor de antrenare a
                  antreprenoriatului etc. În prezent, în cadrul Universității
                  "Dunărea de Jos" din Galați se implementează în calitate de
                  beneficiar și partener: 23 de Proiecte de cercetare și
                  cooperare internațională, 19 proiecte contractate în cadrul
                  programelor operaționale, 18 proiecte de cercetare contractate
                  în cadrul programelor naționale, 13 proiecte cu finanțare
                  complementară.
                </h3>
              </div>
              <div className="photo"></div>
            </div>
          </div>
        </div>
        <div className="content2">
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
        </div>
      </div>

      <hr></hr>
      <Management />
      <FacultyList />
      <SponsorList />
      <Formular />
      <div className="links">
        <h1>Usefull resources</h1>
        <div className="end">
          <div
            className="frontend"
            onClick={() => {
              window.open(
                "https://github.com/w0rd-glitch/severinbumbaru-frontend",
                "_blank"
              );
            }}
          ></div>
          <div
            className="backend"
            onClick={() => {
              window.open(
                "https://github.com/w0rd-glitch/severinbumbaru-backend",
                "_blank"
              );
            }}
          ></div>
        </div>
        <div
          className="apk"
          onClick={() => {
            window.open("https://app.mediafire.com/myfiles", "_blank");
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
