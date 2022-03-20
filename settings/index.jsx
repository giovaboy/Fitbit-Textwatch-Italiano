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
  {color: '#F0A500'}
];

const settings = (props) => {
  return (
    <Page>
      <Section title={<Text bold align="center">Text Watch Italiano</Text>}>
         <Text>Grazie per aver installato questa watchface!</Text>
      </Section> 
      
        <Section title={<Text bold>Colore sfondo</Text>}>
          <ColorSelect settingsKey="bgColor" colors={colors} centered />
        </Section>
        
        <Section title={<Text bold>Colore ora</Text>}>
          <ColorSelect settingsKey="hourColor" colors={colors} centered />
        </Section>
        
        <Section title={<Text bold>Colore minuti</Text>}>
          <ColorSelect settingsKey="minColor" colors={colors} centered />
        </Section>
        
        <Section title={<Text bold>Colore data</Text>}>
          <ColorSelect settingsKey="fgColor" colors={colors} centered />
        </Section>
      
        <Section title={<Text bold>Colore hr/dati salute</Text>}>
            <ColorSelect settingsKey="healthColor" colors={colors} centered />
          </Section>

        <Section title={<Text bold align="center">Altro</Text>}>
        
        <Select label={`Mostra stato della batteria`}
                settingsKey="showBattery2"
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

registerSettingsPage(settings);     <Button label="Reset impostazioni" onClick={() => props.settingsStorage.clear()} />
      </Section>
    </Page>
  )
}

registerSettingsPage(settings);