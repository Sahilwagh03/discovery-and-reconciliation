"use client";

import { Card } from "@/components/ui/card";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { DataSource } from "@/interfaces/chat.interface";
import { cn } from "@/lib/utils";
import { baseStyles, getCardStyles, getStatusDotStyles } from "@/utils/dataSourceCard.styles";

interface Props {
  item: DataSource;
  isSelected: boolean;
}

const DataSourceCard = ({ item, isSelected }: Props) => {
  const Icon = item.icon;
  const styles = getCardStyles(isSelected);
  const statusDot = getStatusDotStyles(item.connected);

  return (
    <label htmlFor={item.value} className={baseStyles.label}>
      <Card className={cn(baseStyles.card, styles.card)}>
        <div className={baseStyles.contentWrapper}>
          <div className={cn(baseStyles.iconWrapper, styles.iconWrapper)}>
            <Icon className={cn(baseStyles.icon, styles.icon)} />
          </div>

          <div className={baseStyles.textContainer}>
            <div className={baseStyles.nameWrapper}>
              <p className={cn(baseStyles.name, styles.text)}>
                {item.name}
              </p>
            </div>

            <div className={baseStyles.statusWrapper}>
              <div className={cn(baseStyles.statusDot, statusDot)} />
              <p className={cn(baseStyles.statusText, styles.subtext)}>
                {item.connected ? "Connected" : "Disconnected"}
              </p>
            </div>

            <p className={cn(baseStyles.lastSync, styles.subtext)}>
              Last Sync: {item?.lastSync?.toLocaleString()}
            </p>
          </div>
        </div>

        <RadioGroupItem
          id={item.value}
          value={item.value}
          className={cn(baseStyles.radio, styles.radio)}
        />
      </Card>
    </label>
  );
};

export default DataSourceCard;