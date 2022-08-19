const colors = [
  {color: '#000000'},
  {color: '#FFFFFF'},
  {color: '#303030'},
  {color: '#505050'},
  {color: '#A0A0A0'},
  {color: '#5B4CFF'},
  {color: '#8080FF'},
  {color: '#3182DE'},
  {color: '#14D3F5'},
  {color: '#3BF7DE'},
  {color: '#7090B5'},
  {color: '#134022'},
  {color: '#394003'},
  {color: '#00A629'},
  {color: '#5BE37D'},
  {color: '#B8FC68'},
  {color: '#E4FA3C'},
  {color: '#FFCC33'},
  {color: '#FC6B3A'},
  {color: '#F83C40'},
  {color: '#F83478'},
  {color: '#F80070'},
  {color: '#D828B8'},
  {color: '#A51E7C'},
  {color: '#BD4EFC'},
  {color: '#4D86FF'},
  {color: '#15B9ED'},
  {color: '#2CB574'},
  {color: '#8173FF'},
  {color: '#72B314'},
  {color: '#F1247C'},
  {color: '#FF752D'},
  {color: '#FF78B7'},
  {color: '#C658FB'},
  {color: '#FA4D61'},
  {color: '#1B2C40'},
  {color: '#F0A500'},
  {color: 'tomato'},
  {color: 'sandybrown'},
  {color: 'gold'},
  {color: 'aquamarine'},
  {color: 'deepskyblue'},
  {color: 'plum'},
  {color: "black"},
  {color: "darkslategrey"},
  {color: "dimgrey"},
  {color: "grey"},
  {color: "lightgrey"},
  {color: "beige"},
  {color: "white"},
  {color: "maroon"},
  {color: "saddlebrown"},
  {color: "darkgoldenrod"},
  {color: "goldenrod"},
  {color: "rosybrown"},
  {color: "wheat"},
  {color: "navy"},
  {color: "blue"},
  {color: "dodgerblue"},
  {color: "deepskyblue"},
  {color: "aquamarine"},
  {color: "cyan"},
  {color: "olive"},
  {color: "darkgreen"},
  {color: "green"},
  {color: "springgreen"},
  {color: "limegreen"},
  {color: "palegreen"},
  {color: "lime"},
  {color: "greenyellow"},
  {color: "darkslateblue"},
  {color: "slateblue"},
  {color: "purple"},
  {color: "fuchsia"},
  {color: "plum"},
  {color: "orchid"},
  {color: "lavender"},
  {color: "darkkhaki"},
  {color: "khaki"},
  {color: "lemonchiffon"},
  {color: "yellow"},
  {color: "gold"},
  {color: "orangered"},
  {color: "orange"},
  {color: "coral"},
  {color: "lightpink"},
  {color: "palevioletred"},
  {color: "deeppink"},
  {color: "darkred"},
  {color: "crimson"},
  {color: "red"}       
];

const settings = (props) => {
  return (
    <Page>
      <Section title={<Text bold align="center">Text Watch Italiano</Text>}>
         <Text>Grazie per aver installato questa watchface!</Text>
      </Section> 
      
      <Section>
       <Toggle settingsKey="toggleColSfondo" label="Mostra selezione Colore sfondo"/>
        { JSON.parse(props.settings.toggleColSfondo || 'false') &&
          <ColorSelect settingsKey="bgColor" colors={colors} centered />
        }
      </Section>
      
      <Section>
        <Toggle settingsKey="toggleColOra" label="Mostra selezione Colore ora"/>
         { JSON.parse(props.settings.toggleColOra || 'false') &&
          <ColorSelect settingsKey="hourColor" colors={colors} centered />
         }
      </Section>
      
      <Section>
          <Toggle settingsKey="toggleColMin" label="Mostra selezione Colore minuti"/>
        { JSON.parse(props.settings.toggleColMin || 'false') &&
         <ColorSelect settingsKey="minColor" colors={colors} centered />
        }
      </Section>
      
      <Section>
        <Toggle settingsKey="toggleColData" label="Mostra selezione Colore data"/>
        { JSON.parse(props.settings.toggleColData || 'false') &&
          <ColorSelect settingsKey="dateColor" colors={colors} centered />
        }
      </Section>
      
      <Section>
        <Toggle settingsKey="toggleColHealth" label="Mostra selezione Colore dati salute"/>
        { JSON.parse(props.settings.toggleColHealth || 'false') &&
          <ColorSelect settingsKey="healthColor" colors={colors} centered />
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