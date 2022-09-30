import {themes} from "./themes"

function getThemeTitleList(){
  let a = []
  themes.forEach(function(v, i){
    a[i] = {name:v.name, value:i}
  })
  return a;
}
let themeTitles = getThemeTitleList();

const colors = [
  {color: '#000000'},
  {color: '#ffffff'},
  {color: '#303030'},
  {color: '#505050'},
  {color: '#a0a0a0'},
  {color: '#5b4cff'},
  {color: '#8080ff'},
  {color: '#3182de'},
  {color: '#14d3f5'},
  {color: '#3bf7de'},
  {color: '#7090b5'},
  {color: '#134022'},
  {color: '#394003'},
  {color: '#00a629'},
  {color: '#5be37d'},
  {color: '#b8fc68'},
  {color: '#e4fa3c'},
  {color: '#ffcc33'},
  {color: '#fc6b3a'},
  {color: '#f83c40'},
  {color: '#f83478'},
  {color: '#f80070'},
  {color: '#d828b8'},
  {color: '#a51e7c'},
  {color: '#bd4efc'},
  {color: '#4d86ff'},
  {color: '#15b9ed'},
  {color: '#2cb574'},
  {color: '#8173ff'},
  {color: '#72b314'},
  {color: '#f1247c'},
  {color: '#ff752d'},
  {color: '#ff78b7'},
  {color: '#c658fb'},
  {color: '#fa4d61'},
  {color: '#1b2c40'},
  {color: '#f0a500'},
  {color: '#bdbdbd'},
  {color: '#e91e63'},
  {color: '#9c27b0'},
  {color: '#673ab7'},
  {color: '#3f51b5'},
  {color: '#2196f3'},
  {color: '#03a9f4'},
  {color: '#00bcd4'},
  {color: '#009688'},
  {color: '#4caf50'},
  {color: '#8bc34a'},
  {color: '#cddc39'},
  {color: '#ffeb3b'},
  {color: '#ffc107'},
  {color: '#ff9800'},
  {color: '#ff5722'},
  {color: '#f44336'},
  {color: '#dedede'},
  {color: '#f8bbd0'},
  {color: '#e1bee7'},
  {color: '#d1c4e9'},
  {color: '#c5cae9'},
  {color: '#bbdefb'},
  {color: '#b3e5fc'},
  {color: '#b2ebf2'},
  {color: '#b2dfdb'},
  {color: '#c8e6c9'},
  {color: '#dcedc8'},
  {color: '#f0f4c3'},
  {color: '#fff9c4'},
  {color: '#ffecb3'},
  {color: '#ffe0b2'},
  {color: '#ffccbc'},
  {color: '#ffcdd2'},
  //FB-COLORS https://dev.fitbit.com/build/guides/user-interface/css/#fitbit-named-colors
  {color: '#3bf7de'},
  //ALTRI
  {color: '#f0f8ff'},
  {color: '#faebd7'},
  {color: '#00ffff'},
  {color: '#7fffd4'},
  {color: '#f0ffff'},
  {color: '#f5f5dc'},
  {color: '#ffe4c4'},
  {color: '#ffebcd'},
  {color: '#0000ff'},
  {color: '#8a2be2'},
  {color: '#a52a2a'},
  {color: '#deb887'},
  {color: '#5f9ea0'},
  {color: '#7fff00'},
  {color: '#d2691e'},
  {color: '#ff7f50'},
  {color: '#6495ed'},
  {color: '#fff8dc'},
  {color: '#dc143c'},
  {color: '#00008b'},
  {color: '#008b8b'},
  {color: '#b8860b'},
  {color: '#a9a9a9'},
  {color: '#006400'},
  {color: '#bdb76b'},
  {color: '#8b008b'},
  {color: '#556b2f'},
  {color: '#ff8c00'},
  {color: '#9932cc'},
  {color: '#8b0000'},
  {color: '#e9967a'},
  {color: '#8fbc8f'},
  {color: '#483d8b'},
  {color: '#2f4f4f'},
  {color: '#00ced1'},
  {color: '#9400d3'},
  {color: '#ff1493'},
  {color: '#00bfff'},
  {color: '#696969'},
  {color: '#1e90ff'},
  {color: '#b22222'},
  {color: '#fffaf0'},
  {color: '#228b22'},
  {color: '#ff00ff'},
  {color: '#dcdcdc'},
  {color: '#f8f8ff'},
  {color: '#ffd700'},
  {color: '#daa520'},
  {color: '#808080'},
  {color: '#008000'},
  {color: '#adff2f'},
  {color: '#f0fff0'},
  {color: '#ff69b4'},
  {color: '#cd5c5c'},
  {color: '#4b0082'},
  {color: '#fffff0'},
  {color: '#f0e68c'},
  {color: '#e6e6fa'},
  {color: '#fff0f5'},
  {color: '#7cfc00'},
  {color: '#fffacd'},
  {color: '#add8e6'},
  {color: '#f08080'},
  {color: '#e0ffff'},
  {color: '#fafad2'},
  {color: '#d3d3d3'},
  {color: '#90ee90'},
  {color: '#ffb6c1'},
  {color: '#ffa07a'},
  {color: '#20b2aa'},
  {color: '#87cefa'},
  {color: '#778899'},
  {color: '#b0c4de'},
  {color: '#ffffe0'},
  {color: '#00ff00'},
  {color: '#32cd32'},
  {color: '#faf0e6'},
  {color: '#800000'},
  {color: '#66cdaa'},
  {color: '#0000cd'},
  {color: '#ba55d3'},
  {color: '#9370db'},
  {color: '#3cb371'},
  {color: '#7b68ee'},
  {color: '#00fa9a'},
  {color: '#48d1cc'},
  {color: '#c71585'},
  {color: '#191970'},
  {color: '#f5fffa'},
  {color: '#ffe4e1'},
  {color: '#ffe4b5'},
  {color: '#ffdead'},
  {color: '#000080'},
  {color: '#fdf5e6'},
  {color: '#808000'},
  {color: '#6b8e23'},
  {color: '#ffa500'},
  {color: '#ff4500'},
  {color: '#da70d6'},
  {color: '#eee8aa'},
  {color: '#98fb98'},
  {color: '#afeeee'},
  {color: '#db7093'},
  {color: '#ffefd5'},
  {color: '#ffdab9'},
  {color: '#cd853f'},
  {color: '#ffc0cb'},
  {color: '#dda0dd'},
  {color: '#b0e0e6'},
  {color: '#800080'},
  {color: '#ff0000'},
  {color: '#bc8f8f'},
  {color: '#4169e1'},
  {color: '#8b4513'},
  {color: '#fa8072'},
  {color: '#f4a460'},
  {color: '#2e8b57'},
  {color: '#fff5ee'},
  {color: '#a0522d'},
  {color: '#c0c0c0'},
  {color: '#87ceeb'},
  {color: '#6a5acd'},
  {color: '#708090'},
  {color: '#fffafa'},
  {color: '#00ff7f'},
  {color: '#4682b4'},
  {color: '#d2b48c'},
  {color: '#008080'},
  {color: '#d8bfd8'},
  {color: '#ff6347'},
  {color: '#40e0d0'},
  {color: '#ee82ee'},
  {color: '#f5deb3'},
  {color: '#f5f5f5'},
  {color: '#ffff00'},
  {color: '#9acd32'}
]

const settings = (props) => {
  
  function setTheme(n){
    let vals = themes[n]["values"];
    for (const key in vals) {
      props.settingsStorage.setItem(key, JSON.stringify(vals[key]));
    }
  }
  
  return (
    <Page>
      
      <Section title={<Text bold align="center">Text Watch Italiano</Text>}>
        <Text>Grazie per aver installato questa watchface!</Text>
        <Text align="center"><Link source="https://www.paypal.me/GiovanniZilli">Se ti va, offrimi un gelato!🍨</Link></Text>
      </Section>
      
      <Section>      
        <Select
          label="Scegli tra temi preconfigurati"
          title="Scegli tra temi preconfigurati"
          selectViewTitle="Scegli tra temi preconfigurazioni di colori"
          settingsKey="theme"
          options={themeTitles}
          onSelection={(selection) => setTheme(selection.selected)}
        />
        
      </Section>
      
      <Section>
       <Toggle settingsKey="toggleColSfondo" label="Mostra selezione Colore sfondo"/>
        { JSON.parse(props.settings.toggleColSfondo || 'false') &&
          <ColorSelect settingsKey="bgColor" colors={colors} centered onSelection={(value) => props.settingsStorage.removeItem("theme")} />
        }
      </Section>
      
      <Section>
        <Toggle settingsKey="toggleColOra" label="Mostra selezione Colore ora"/>
         { JSON.parse(props.settings.toggleColOra || 'false') &&
          <ColorSelect settingsKey="hourColor" colors={colors} centered onSelection={(value) => props.settingsStorage.removeItem("theme")} />
         }
      </Section>
      
      <Section>
          <Toggle settingsKey="toggleColMin" label="Mostra selezione Colore minuti"/>
        { JSON.parse(props.settings.toggleColMin || 'false') &&
         <ColorSelect settingsKey="minColor" colors={colors} centered onSelection={(value) => props.settingsStorage.removeItem("theme")} />
        }
      </Section>
      
      <Section>
        <Toggle settingsKey="toggleColData" label="Mostra selezione Colore data"/>
        { JSON.parse(props.settings.toggleColData || 'false') &&
          <ColorSelect settingsKey="dateColor" colors={colors} centered onSelection={(value) => props.settingsStorage.removeItem("theme")} />
        }
      </Section>
      
      <Section>
        <Toggle settingsKey="toggleColHealth" label="Mostra selezione Colore dati salute"/>
        { JSON.parse(props.settings.toggleColHealth || 'false') &&
          <ColorSelect settingsKey="healthColor" colors={colors} centered onSelection={(value) => props.settingsStorage.removeItem("theme")} />
        }
      </Section>

      <Section title={<Text bold align="center">Altro</Text>}>
        
        <Select label="Mostra stato della batteria"
                title="Mostra stato della batteria"
                selectViewTitle="Mostra stato della batteria"
                settingsKey="showBattery"
                options={[
                  {name:"No"},
                  {name:"Sì"},
                  {name:"Se Sotto al 25%"}
                ]}/>
          
        <Button label="Reset impostazioni" onClick={() => props.settingsStorage.clear()} />
      </Section>
    </Page>
  )
}

registerSettingsPage(settings);